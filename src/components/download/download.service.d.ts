export declare class DownloadService {
    private readonly I18nCategory;
    private readonly I18nLanguage;
    private readonly I18n;
    constructor(I18nCategory: any, I18nLanguage: any, I18n: any);
    downloadFile(data: any): Promise<{
        code: number;
        list: {};
        message?: undefined;
    } | {
        code: number;
        message: string;
        list?: undefined;
    }>;
}
