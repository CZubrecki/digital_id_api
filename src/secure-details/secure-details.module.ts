import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecureDetails } from '../secure-details/entities/secure-details.entity';
import { SecureDetailsService } from './secure-details.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([SecureDetails]),
    ],
    controllers: [],
    providers: [SecureDetailsService],
    exports: [TypeOrmModule, SecureDetailsService],
})
export class SecureDetailsModule { }
