import { I18nService } from './i18n.service';
export declare class I18nCategoryController {
    private readonly i18nService;
    constructor(i18nService: I18nService);
    init(): Promise<{
        code: number;
        message: string;
        data: any;
    }>;
    create(createData: any): Promise<{
        code: number;
        message: string;
        data?: undefined;
    } | {
        code: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        code: number;
        list: any;
    }>;
    findOne(id: string): Promise<{
        code: number;
        data: any;
        page: {
            pageno: number;
            total: any;
        };
    }>;
    update(id: string, updateData: any): Promise<{
        code: number;
        data: any;
        message: string;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        code: number;
        message: string;
    }>;
}
export declare class I18nLanguageController {
    private readonly i18nService;
    constructor(i18nService: I18nService);
    create(createData: any): Promise<{
        code: number;
        message: string;
        data?: undefined;
    } | {
        code: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        code: number;
        list: any;
    }>;
    findOne(id: string): Promise<{
        code: number;
        data: any;
        page: {
            pageno: number;
            total: any;
        };
    }>;
    update(id: string, updateData: any): Promise<{
        code: number;
        data: any;
        message: string;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        code: number;
        message: string;
    }>;
}
export declare class I18nController {
    private readonly i18nService;
    constructor(i18nService: I18nService);
    create(createData: any): Promise<{
        code: number;
        message: string;
        data?: undefined;
    } | {
        code: number;
        message: string;
        data: any;
    }>;
    findOne(id: string, query?: any): Promise<{
        code: number;
        data: any;
        page: {
            pageno: number;
            total: any;
        };
    }>;
    update(id: string, updateData: any): Promise<{
        code: number;
        data: any;
        message: string;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        code: number;
        message: string;
    }>;
}
