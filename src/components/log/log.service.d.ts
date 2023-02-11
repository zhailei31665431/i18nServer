import { UserService } from './../user/user.service';
export declare class LogService {
    private readonly usersService;
    private readonly LogModule;
    constructor(usersService: UserService, LogModule: any);
    create(data: any): Promise<void>;
    list(): Promise<{
        code: number;
        list: any;
    }>;
}
