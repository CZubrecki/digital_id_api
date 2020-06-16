import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SecureDetailsService } from 'src/secure-details/secure-details.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private secureDetailsService: SecureDetailsService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUserByEmail(email);
        const secureDetails = await this.secureDetailsService.findSecureDetails(user && user.id);
        const passwordsMatch = password && user && await this.validateUserPassword(password, secureDetails.secureHash);
        if (user && passwordsMatch) {
            const { ...result } = user;
            return result;
        }
        return null;
    }

    async validateUserPassword(input, hashedPassword): Promise<boolean> {
        return compare(input, hashedPassword).then((result) => (result));
    }

    async login(user: any) {
        const dbUser = await this.usersService.findUserByEmail(user.username);
        const payload = { email: dbUser.email, sub: dbUser.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
