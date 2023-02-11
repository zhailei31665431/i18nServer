import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly jwtService;
    private readonly UserModule;
    constructor(jwtService: JwtService, UserModule: any);
    validateUser(payload: any): Promise<{
        code: number;
        user: any;
    }>;
    login(data: any): Promise<{
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
    createUser(createUserDto: CreateUserDto): Promise<{
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
    update(data: any): Promise<{
        code: number;
        message: string;
    }>;
}
