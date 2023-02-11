export declare class UploadService {
    private readonly I18nCategory;
    private readonly I18nLanguage;
    private readonly I18nModule;
    constructor(I18nCategory: any, I18nLanguage: any, I18nModule: any);
    upload(file: any): Promise<{
        code: number;
        list: any[];
        data?: undefined;
        message?: undefined;
    } | {
        code: number;
        data: {
            'common.first.1': {
                en: string;
                'zh-cn': string;
            };
            'common.2': {
                en: string;
                'zh-cn': string;
            };
            'common.third': {
                en: string;
                'zh-cn': string;
            };
        };
        message: string;
        list?: undefined;
    }>;
}
