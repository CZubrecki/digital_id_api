import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { SecureDetailsService } from './secure-details/secure-details.service';
import { SecureDetailsModule } from './secure-details/secure-details.module';
import { DigitalIdController } from './digital-id/digital-id.controller';
import { DigitalIdService } from './digital-id/digital-id.service';
import { DigitalIdModule } from './digital-id/digital-id.module';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ autoLoadEntities: true, }),
    UsersModule,
    AuthModule,
    SecureDetailsModule,
    DigitalIdModule,
    EmailModule,
  ],
  controllers: [AppController, UsersController, DigitalIdController],
  providers: [AppService, UsersService, SecureDetailsService, DigitalIdService, EmailService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
