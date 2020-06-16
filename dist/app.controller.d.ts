import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(userCredentials: any): Promise<{
        access_token: string;
    }>;
}
