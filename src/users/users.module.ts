import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SecureDetailsModule } from 'src/secure-details/secure-details.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    SecureDetailsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule { }
