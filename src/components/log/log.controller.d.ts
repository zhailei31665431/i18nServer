import { LogService } from './log.service';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    create(createData: any): Promise<void>;
    findAll(): Promise<{
        code: number;
        list: any;
    }>;
}
