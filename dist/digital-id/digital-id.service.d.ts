import { EmailService } from 'src/email/email.service';
export declare class DigitalIdService {
    private emailService;
    constructor(emailService: EmailService);
    runEXE(): Promise<void>;
}
