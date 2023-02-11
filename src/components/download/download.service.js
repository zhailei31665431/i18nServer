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
exports.DownloadService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let DownloadService = class DownloadService {
    constructor(I18nCategory, I18nLanguage, I18n) {
        this.I18nCategory = I18nCategory;
        this.I18nLanguage = I18nLanguage;
        this.I18n = I18n;
    }
    async downloadFile(data) {
        let result = await this.I18nCategory.find({
            $or: data.files.split(',').map((item) => {
                return {
                    key: item,
                };
            }),
        }).select('_id key');
        let resultLanguage = await this.I18nLanguage.find({}).select('key');
        resultLanguage = resultLanguage.map((item) => {
            return item['key'];
        });
        if (result.length != 0) {
            let ids = [];
            let resultKeyValue = {};
            result.forEach((item) => {
                resultKeyValue[item['_id']] = item['key'];
                ids.push(item['_id'].toString());
            });
            let list = await this.I18n.find({
                $or: ids.map((item) => {
                    return {
                        oid: item,
                    };
                }),
            });
            let newList = {};
            list.forEach((item) => {
                let obj = {};
                resultLanguage.forEach((childitem) => {
                    if (typeof newList[childitem] !== 'undefined') {
                        newList[childitem][resultKeyValue[item['oid']] + '.' + item['key']] = item[childitem];
                    }
                    else {
                        newList[childitem] = {
                            [resultKeyValue[item['oid']] + '.' + item['key']]: item[childitem],
                        };
                    }
                });
            });
            console.log(newList, list, resultLanguage);
            return {
                code: 1,
                list: newList,
            };
        }
        else {
            return {
                code: 0,
                message: 'Data does not exist',
            };
        }
    }
};
DownloadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('I18nCategory')),
    __param(1, (0, mongoose_1.InjectModel)('I18nLanguage')),
    __param(2, (0, mongoose_1.InjectModel)('I18n')),
    __metadata("design:paramtypes", [Object, Object, Object])
], DownloadService);
exports.DownloadService = DownloadService;
//# sourceMappingURL=download.service.js.map