import { Repository } from 'typeorm';
import { SecureDetails } from './entities/secure-details.entity';
export declare class SecureDetailsService {
    private secureDetailsRepository;
    constructor(secureDetailsRepository: Repository<SecureDetails>);
    signUp(userId: string, passwordHash: string): Promise<any>;
    findSecureDetails(userId: string): Promise<SecureDetails>;
}
