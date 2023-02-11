import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(req: any, loginParmas: any, res: any): Promise<{
        code: number;
        message: string;
        data: {
            token: string;
        };
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    create(body: CreateUserDto): Promise<{
        code: number;
        message: string;
        data?: undefined;
    } | {
        code: number;
        data: {
            id: any;
            name: any;
            create_date: number;
            update_data: number;
        };
        message: string;
    }>;
    remove(id: string): Promise<{
        code: number;
        message: string;
    }>;
    list(): Promise<{
        code: number;
        list: any;
    }>;
    info(id: string): Promise<{
        code: number;
        data: {
            id: string;
            username: any;
        };
    }>;
    update(createData: any): Promise<{
        code: number;
        message: string;
    }>;
}
