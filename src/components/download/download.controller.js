"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadController = void 0;
const common_1 = require("@nestjs/common");
const download_service_1 = require("./download.service");
const fs_1 = require("fs");
const path_1 = require("path");
const archiver = require("archiver");
const validation_pipe_1 = require("../../pipe/validation.pipe");
const getFilePrimose = async (pwd, data) => {
    return new Promise((resolve, reject) => {
        let file = (0, fs_1.createWriteStream)((0, path_1.join)(process.cwd(), pwd));
        file.write(JSON.stringify(data, null, 2));
        file.on('finish', function () {
            resolve('');
        });
        file.end();
    });
};
const fileZip = async (fileName, list) => {
    return new Promise((resolve, reject) => {
        if (typeof list === 'undefined' || list.length === 0) {
            reject('error');
        }
        const output = (0, fs_1.createWriteStream)((0, path_1.join)(process.cwd(), `/download/${fileName}.tar`));
        const archive = archiver('tar', {
            zlib: { level: 9 },
        });
        archive.on('end', () => {
            resolve(true);
        });
        archive.on('close', () => { });
        archive.pipe(output);
        for (let i in list) {
            let i18nData = list[i];
            let key = i;
            archive.append(JSON.stringify(i18nData, null, 2), {
                name: `${key}.json`,
            });
        }
        archive.finalize();
    });
};
let DownloadController = class DownloadController {
    constructor(downloadService) {
        this.downloadService = downloadService;
    }
    async getFile(query, res) {
        const time = Date.parse(new Date().toString()) / 1000;
        let result = await this.downloadService.downloadFile(query);
        if (result.code === 1) {
            let zip = await fileZip(time, result.list);
            const readFile = await (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), `/download/${time}.tar`));
            res.set({
                'Content-Type': 'application/json',
                'Content-Disposition': 'attachment; filename="i18n.tar"',
            });
            return new common_1.StreamableFile(readFile);
        }
        else {
            return result;
        }
    }
};
__decorate([
    (0, common_1.Get)('i18n'),
    (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DownloadController.prototype, "getFile", null);
DownloadController = __decorate([
    (0, common_1.Controller)('download'),
    __metadata("design:paramtypes", [download_service_1.DownloadService])
], DownloadController);
exports.DownloadController = DownloadController;
//# sourceMappingURL=download.controller.js.map