import { CreateUserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    signUp(createUserDto: CreateUserDto): Promise<any>;
    getUserProfile(req: any): Promise<any>;
}
