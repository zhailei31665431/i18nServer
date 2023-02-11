import { Strategy } from 'passport-jwt';
import { UserService } from './components/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UserService);
    validate(payload: any): Promise<{
        userId: any;
        username: any;
        password: any;
    }>;
}
export {};
