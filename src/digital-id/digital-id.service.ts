import { Injectable } from '@nestjs/common';
import { DigitIdDto } from './dtos/digital-id.dto';
import { EmailService } from 'src/email/email.service';
const { execFile } = require('child_process');
const fs = require('fs');

@Injectable()
export class DigitalIdService {
    constructor(
        private emailService: EmailService,
    ) { }

    async runEXE() {
        fs.readFile('./DigitalID.pass/pass.json', (err, data) => {
            if (err) {
                throw err;
            }
            if (data) {
                const template: DigitIdDto = JSON.parse(data);
                template.description = 'Digital ID';
                const json = JSON.stringify(template);

                fs.writeFile('./DigitalID.pass/pass.json', json, 'utf8', (err, data) => {
                    if (err) {
                        throw err;
                    }
                });
            }
        });
        const child = execFile('./signpass', ['-p', 'DigitalID.pass'], (error, stdout, stderr) => {
            if (error) {
                throw error;
            }
            console.log(stdout);
            console.log(stderr);
        });
        this.emailService.sendEmail();
    }
}
