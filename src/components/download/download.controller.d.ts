import { StreamableFile } from '@nestjs/common';
import { DownloadService } from './download.service';
import type { Response } from 'express';
export declare class DownloadController {
    private readonly downloadService;
    constructor(downloadService: DownloadService);
    getFile(query: any, res: Response): Promise<StreamableFile | any | undefined>;
}
