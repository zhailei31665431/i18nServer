import { UploadService } from './upload.service';
import { I18nService } from './../i18n/i18n.service';
export declare class UploadController {
    private readonly uploadService;
    private readonly i18nService;
    constructor(uploadService: UploadService, i18nService: I18nService);
    create(file: any): Promise<{
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
