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
exports.I18nInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const mongoose_1 = require("@nestjs/mongoose");
const user_service_1 = require("./../user/user.service");
const log_service_1 = require("../log/log.service");
const pubfun_1 = require("./../../utils/pubfun");
let I18nInterceptor = class I18nInterceptor {
    constructor(I18nCategory, I18nLanguage, I18n, usersService, logService) {
        this.I18nCategory = I18nCategory;
        this.I18nLanguage = I18nLanguage;
        this.I18n = I18n;
        this.usersService = usersService;
        this.logService = logService;
    }
    async intercept(context, next) {
        const req = context.getArgByIndex(1).req;
        if (req.url.indexOf('/i18n/init') == -1) {
            let user = req.user, method = req.method, body = req.body, headers = req.headers, params = req.params;
            if (method == 'PUT' || method == 'POST' || method == 'DELETE') {
                let userinfo = await this.usersService.info(user.userId);
                if (method === 'DELETE') {
                    if (req.url.indexOf('/i18n/data/') != -1) {
                        body = await this.I18n.findOne({ _id: params.id });
                        body = (0, pubfun_1.turnData)('', body);
                    }
                    else if (req.url.indexOf('/i18n/category') != -1) {
                        body = await this.I18nCategory.findOne({ _id: params.id });
                        body = (0, pubfun_1.turnData)('category', body);
                    }
                    else {
                        body = await this.I18nLanguage.findOne({ _id: params.id });
                        body = (0, pubfun_1.turnData)('language', body);
                    }
                }
                let data = {
                    uid: userinfo['data']['id'],
                    name: userinfo['data']['name'],
                    type: method,
                    data: body,
                };
                this.logService.create(data);
            }
        }
        return next.handle().pipe((0, operators_1.map)((data) => {
            return data;
        }));
    }
};
I18nInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('I18nCategory')),
    __param(1, (0, mongoose_1.InjectModel)('I18nLanguage')),
    __param(2, (0, mongoose_1.InjectModel)('I18n')),
    __metadata("design:paramtypes", [Object, Object, Object, user_service_1.UserService,
        log_service_1.LogService])
], I18nInterceptor);
exports.I18nInterceptor = I18nInterceptor;
//# sourceMappingURL=i18n.interceptor.js.map