"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadModule = void 0;
const common_1 = require("@nestjs/common");
const download_service_1 = require("./download.service");
const download_controller_1 = require("./download.controller");
const mongoose_1 = require("@nestjs/mongoose");
const i18n_module_1 = require("../i18n/i18n.module");
let DownloadModule = class DownloadModule {
};
DownloadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18nCategory',
                    schema: i18n_module_1.I18nCaterorySchema,
                    collection: 'category',
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18nLanguage',
                    schema: i18n_module_1.I18nLanguageSchema,
                    collection: 'language',
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18n',
                    schema: i18n_module_1.I18nSchema,
                    collection: 'i18n',
                },
            ]),
        ],
        controllers: [download_controller_1.DownloadController],
        providers: [download_service_1.DownloadService],
    })
], DownloadModule);
exports.DownloadModule = DownloadModule;
//# sourceMappingURL=download.module.js.map