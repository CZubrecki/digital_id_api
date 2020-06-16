import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SecureDetailsService } from 'src/secure-details/secure-details.service';
export declare class AuthService {
    private usersService;
    private secureDetailsService;
    private jwtService;
    constructor(usersService: UsersService, secureDetailsService: SecureDetailsService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    validateUserPassword(input: any, hashedPassword: any): Promise<boolean>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
