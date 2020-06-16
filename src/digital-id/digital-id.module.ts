import { Module } from '@nestjs/common';
import { DigitalIdController } from './digital-id.controller';
import { DigitalIdService } from './digital-id.service';
import { EmailModule } from 'src/email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        EmailModule,
    ],
    controllers: [DigitalIdController],
    providers: [DigitalIdService],
    exports: [DigitalIdService],
})
export class DigitalIdModule { }
