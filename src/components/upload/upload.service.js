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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const mongoose_1 = require("@nestjs/mongoose");
const uploadDemo = {
    'common.first.1': {
        en: '1',
        'zh-cn': '1',
    },
    'common.2': {
        en: '2',
        'zh-cn': '2',
    },
    'common.third': {
        en: '3',
        'zh-cn': '3',
    },
};
let UploadService = class UploadService {
    constructor(I18nCategory, I18nLanguage, I18nModule) {
        this.I18nCategory = I18nCategory;
        this.I18nLanguage = I18nLanguage;
        this.I18nModule = I18nModule;
    }
    async upload(file) {
        let self = this;
        try {
            let data = JSON.parse(file);
            if (Object.prototype.toString.call(data) === '[object Object]') {
                let newData = [];
                let decoupling = {};
                let categoryList = new Set([]);
                for (let i in data) {
                    let splitKey = i.split('.');
                    categoryList.add(splitKey[0]);
                    let key = splitKey.reduce((prev, cur, index, arr) => {
                        if (index !== 0) {
                            return prev + '.' + cur;
                        }
                    });
                    decoupling[key] = data[i];
                }
                let category = await this.I18nCategory.find({
                    $or: Array.from(categoryList).map((i) => {
                        return { key: i };
                    }),
                }).select('_id key');
                let languageList = await this.I18nLanguage.find();
                languageList = languageList.map((i) => {
                    return i['key'];
                });
                for (let i in data) {
                    let splitKey = i.split('.');
                    let categoryKey = splitKey[0] + '';
                    let key = splitKey.reduce((prev, cur, index, arr) => {
                        if (index == 0) {
                            return '';
                        }
                        else if (index == 1) {
                            return prev + cur;
                        }
                        else {
                            return prev + '.' + cur;
                        }
                    }, '');
                    let result = await self.I18nModule.findOne({ key: key });
                    if (result != null) {
                        let res = await self.I18nModule.findOneAndUpdate({ key: key }, Object.assign({}, data[i], {
                            update_data: Date.now(),
                        }));
                        data[i]['id'] = res['_id'];
                        data[i]['update_data'] = Date.parse(res['update_data']) / 1000;
                    }
                    else {
                        let newData = new self.I18nModule(Object.assign({}, {
                            oid: category.find((item) => item['key'] == categoryKey)['_id'],
                            key: key,
                        }, data[i]));
                        let res = await newData.save();
                        data[i]['id'] = res._id;
                        data[i]['create_date'] = Date.parse(res['create_date']) / 1000;
                        data[i]['update_data'] = Date.parse(res['update_data']) / 1000;
                    }
                    newData.push(data[i]);
                }
                return {
                    code: 1,
                    list: newData,
                };
            }
            else {
                return {
                    code: 0,
                    data: uploadDemo,
                    message: 'Format error, please upload again',
                };
            }
        }
        catch (error) {
            return {
                code: 0,
                data: uploadDemo,
                message: 'Format error, please upload again',
            };
        }
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, mongoose_1.InjectModel)('I18nCategory')),
    __param(1, (0, mongoose_1.InjectModel)('I18nLanguage')),
    __param(2, (0, mongoose_1.InjectModel)('I18n')),
    __metadata("design:paramtypes", [Object, Object, Object])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map