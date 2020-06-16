import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SecureDetails } from './entities/secure-details.entity';
import { Users } from '../users/entities/user.entity';

@Injectable()
export class SecureDetailsService {
    constructor(
        @InjectRepository(SecureDetails)
        private secureDetailsRepository: Repository<SecureDetails>,
    ) { }

    async signUp(userId: string, passwordHash: string): Promise<any> {
        const data = { userId: userId, secureHash: passwordHash };
        return await this.secureDetailsRepository.insert(data);
    }

    async findSecureDetails(userId: string): Promise<SecureDetails> {
        return this.secureDetailsRepository.findOne({ userId: userId });
    }
}
