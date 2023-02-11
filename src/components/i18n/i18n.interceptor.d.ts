import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { LogService } from '../log/log.service';
export declare class I18nInterceptor implements NestInterceptor {
    private readonly I18nCategory;
    private readonly I18nLanguage;
    private readonly I18n;
    private readonly usersService;
    private readonly logService;
    constructor(I18nCategory: any, I18nLanguage: any, I18n: any, usersService: UserService, logService: LogService);
    intercept<T>(context: ExecutionContext, next: CallHandler): Promise<Observable<T>>;
}
