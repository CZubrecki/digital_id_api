import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { SecureDetailsService } from 'src/secure-details/secure-details.service';
export declare class UsersService {
    private usersRepository;
    private secureDetailsService;
    constructor(usersRepository: Repository<Users>, secureDetailsService: SecureDetailsService);
    signUp(user: Users, passwordHash: string): Promise<any>;
    findUserByEmail(email: string): Promise<Users>;
    findUserByUserId(id: string): Promise<Users>;
}
