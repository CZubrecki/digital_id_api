import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { SecureDetails } from '../secure-details/entities/secure-details.entity';
import { SecureDetailsService } from 'src/secure-details/secure-details.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        private secureDetailsService: SecureDetailsService,
    ) { }

    async signUp(user: Users, passwordHash: string): Promise<any> {
        const foundUser = this.findUserByEmail(user.email);

        if (!foundUser) {
            const newUserId = await this.usersRepository.insert(user).then((result) => (result.identifiers[0].id)).catch(error => console.log(error));
            if (newUserId) {
                await this.secureDetailsService.signUp(newUserId, passwordHash);
            }
        }
    }

    async findUserByEmail(email: string): Promise<Users> {
        const user = await this.usersRepository.findOne({ email: email });
        return user;
    }

    async findUserByUserId(id: string): Promise<Users> {
        return this.usersRepository.findOne({ id: id });
    }
}
