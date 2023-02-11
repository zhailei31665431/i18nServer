export declare class I18nService {
    private readonly I18nCategory;
    private readonly I18nLanguage;
    private readonly I18n;
    constructor(I18nCategory: any, I18nLanguage: any, I18n: any);
    initnormal(): Promise<{
        code: number;
        message: string;
        data: any;
    }>;
    create(key: string, data: any): Promise<{
        code: number;
        message: string;
        data?: undefined;
    } | {
        code: number;
        message: string;
        data: any;
    }>;
    list(key: string): Promise<{
        code: number;
        list: any;
    }>;
    item(key: string, id: string, params?: any): Promise<{
        code: number;
        data: any;
        page: {
            pageno: number;
            total: any;
        };
    }>;
    update(key: string, id: string, data: any): Promise<{
        code: number;
        data: any;
        message: string;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    remove(key: string, id: string): Promise<{
        code: number;
        message: string;
    }>;
    removeLanguage(key: string, id: string): Promise<{
        code: number;
        message: string;
    }>;
}
