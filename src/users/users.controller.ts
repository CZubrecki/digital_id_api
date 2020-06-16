import { Controller, Post, UseGuards, Get, Body, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dtos/user.dto';
import { hash } from 'bcrypt';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService,
    ) { }

    @Post('signUp')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<any> {
        const saltRounds = 10;
        const user = createUserDto;
        return hash(createUserDto.password, saltRounds).then(async (hash) => {
            const result = await this.userService.signUp(user, hash);
            if (result) {
                return result;
            }
            return null;
        }).catch(err => {
            throw new Error(err);
        });
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getUserProfile(@Request() req: any): Promise<any> {
        if (!req.user) {
            throw new Error('User cannot be found');
        }
        return this.userService.findUserByUserId(req.user.userId);
    }
}
