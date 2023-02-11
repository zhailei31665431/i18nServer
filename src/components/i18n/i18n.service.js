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
exports.I18nService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const pubfun_1 = require("./../../utils/pubfun");
const turnFunName = (key) => {
    if (key == 'category') {
        return 'I18nCategory';
    }
    else if (key == 'language') {
        return 'I18nLanguage';
    }
    else {
        return 'I18n';
    }
};
let I18nService = class I18nService {
    constructor(I18nCategory, I18nLanguage, I18n) {
        this.I18nCategory = I18nCategory;
        this.I18nLanguage = I18nLanguage;
        this.I18n = I18n;
    }
    async initnormal() {
        let data = {
            key: 'common',
            name: 'common',
            desc: 'common',
        };
        let newData = new this.I18nCategory(data);
        let res = await newData.save();
        res = (0, pubfun_1.turnData)('category', res);
        let newLanguageData = {
            key: 'en',
            name: 'English',
        };
        let newLanguage = new this.I18nLanguage(newLanguageData);
        let ress = await newLanguage.save();
        return {
            code: 1,
            message: 'Init Success',
            data: res,
        };
    }
    async create(key, data) {
        let languageList = await this.I18nLanguage.find();
        languageList = languageList.map((i) => {
            return i['key'];
        });
        let actionFunc = this[turnFunName(key)];
        let result = await actionFunc.findOne({ key: data.key });
        if (result != null) {
            return {
                code: 0,
                message: 'Data Already Exists',
            };
        }
        else {
            let newData = new actionFunc(data);
            let res = await newData.save();
            res = (0, pubfun_1.turnData)(key, res, languageList);
            return {
                code: 1,
                message: 'Create Success',
                data: res,
            };
        }
    }
    async list(key) {
        let actionFunc = this[turnFunName(key)];
        let res = await actionFunc.find({});
        res = res.map((item) => {
            return (0, pubfun_1.turnData)(key, item);
        });
        return {
            code: 1,
            list: res,
        };
    }
    async item(key, id, params) {
        let actionFunc = this[turnFunName(key)];
        let languageList = await this.I18nLanguage.find();
        languageList = languageList.map((i) => {
            return i['key'];
        });
        let sortData = {
            create_date: -1,
        };
        let skipData = 0;
        let orSearch = {};
        if (params['sk'] && params['sk'].length != 0) {
            orSearch['$or'] = [
                { key: new RegExp(params['sk'], 'i') },
                { name: new RegExp(params['sk'], 'i') },
                ...languageList.map((i) => {
                    return { [i]: new RegExp(params['sk'], 'i') };
                }),
            ];
        }
        if (params['pageno'] > 0) {
            skipData = params['pageno'] * (params['pagesize'] || 20);
        }
        let allnumber = await actionFunc
            .find(Object.assign({ oid: id }, orSearch))
            .countDocuments();
        let res = await actionFunc
            .find(Object.assign({ oid: id }, orSearch))
            .sort(sortData)
            .skip(skipData)
            .limit(params['pagesize'] || 20);
        if (res && res.length != 0) {
            return {
                code: 1,
                data: res.map(function (i) {
                    return (0, pubfun_1.turnData)(key, i, languageList);
                }),
                page: {
                    pageno: Number(params['pageno']) || 0,
                    total: allnumber,
                },
            };
        }
        else {
            return {
                code: 1,
                data: [],
                page: {
                    pageno: Number(params['pageno']) || 0,
                    total: allnumber,
                },
            };
        }
    }
    async update(key, id, data) {
        let languageList = await this.I18nLanguage.find();
        languageList = languageList.map((i) => {
            return i['key'];
        });
        let actionFunc = this[turnFunName(key)];
        let saveData = Object.assign({}, data, {
            update_data: Date.now(),
        });
        let res = await actionFunc.updateOne({ _id: id }, saveData);
        res = await actionFunc.findOne({ _id: id });
        if (res) {
            res = (0, pubfun_1.turnData)(key, res, languageList);
            return {
                code: 1,
                data: res,
                message: 'Update Success',
            };
        }
        else {
            return {
                code: 0,
                message: 'Save Failed',
            };
        }
    }
    async remove(key, id) {
        let actionFunc = this[turnFunName(key)];
        let data = await actionFunc.findOne({ _id: id });
        if (data.key == 'common' && key == 'category') {
            return {
                code: 0,
                message: 'Default public cannot be deleted',
            };
        }
        else {
            let res = await actionFunc.deleteOne({ _id: id });
            if (res != null) {
                return {
                    code: 1,
                    message: 'Remove Success',
                };
            }
            else {
                return {
                    code: 0,
                    message: 'Remove Error',
                };
            }
        }
    }
    async removeLanguage(key, id) {
        let actionFunc = this[turnFunName(key)];
        let data = await actionFunc.findOne({ _id: id });
        let res = await actionFunc.deleteOne({ _id: id });
        let removeListKey = await this.I18n.updateMany({}, { $unset: { [data['key']]: '' } });
        if (res != null) {
            return {
                code: 1,
                message: 'Remove Success',
            };
        }
        else {
            return {
                code: 0,
                message: 'Remove Error',
            };
        }
    }
};
I18nService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('I18nCategory')),
    __param(1, (0, mongoose_1.InjectModel)('I18nLanguage')),
    __param(2, (0, mongoose_1.InjectModel)('I18n')),
    __metadata("design:paramtypes", [Object, Object, Object])
], I18nService);
exports.I18nService = I18nService;
//# sourceMappingURL=i18n.service.js.map