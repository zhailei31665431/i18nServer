"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nModule = exports.I18nSchema = exports.I18nLanguageSchema = exports.I18nCaterorySchema = void 0;
const common_1 = require("@nestjs/common");
const i18n_service_1 = require("./i18n.service");
const pubfun_1 = require("../../utils/pubfun");
const i18n_controller_1 = require("./i18n.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_module_1 = require("../user/user.module");
const log_module_1 = require("../log/log.module");
exports.I18nCaterorySchema = new mongoose.Schema({
    key: String,
    name: String,
    desc: String,
    create_date: { type: Date, default: Date.now },
    update_data: { type: Date, default: Date.now },
});
exports.I18nLanguageSchema = new mongoose.Schema({
    key: String,
    name: String,
    create_date: { type: Date, default: Date.now },
    update_data: { type: Date, default: Date.now },
});
exports.I18nSchema = new mongoose.Schema({
    oid: String,
    key: String,
    create_date: { type: Date, default: Date.now },
    update_data: { type: Date, default: Date.now },
}, { strict: false });
let I18nModule = class I18nModule {
};
I18nModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            log_module_1.LogModule,
            (0, pubfun_1.getDatabase)(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18nCategory',
                    schema: exports.I18nCaterorySchema,
                    collection: 'category',
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18nLanguage',
                    schema: exports.I18nLanguageSchema,
                    collection: 'language',
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18n',
                    schema: exports.I18nSchema,
                    collection: 'i18n',
                },
            ]),
        ],
        controllers: [i18n_controller_1.I18nLanguageController, i18n_controller_1.I18nCategoryController, i18n_controller_1.I18nController],
        providers: [i18n_service_1.I18nService],
        exports: [i18n_service_1.I18nService],
    })
], I18nModule);
exports.I18nModule = I18nModule;
//# sourceMappingURL=i18n.module.js.map