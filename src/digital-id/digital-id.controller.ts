import { Controller, UseGuards, Post } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DigitalIdService } from './digital-id.service';

@Controller('digital-id')
export class DigitalIdController {
    constructor(
        private digitalIdService: DigitalIdService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post('runEXE')
    async runEXE(): Promise<any> {
        this.digitalIdService.runEXE();
    }
}
