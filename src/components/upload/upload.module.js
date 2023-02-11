"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModule = void 0;
const common_1 = require("@nestjs/common");
const upload_service_1 = require("./upload.service");
const upload_controller_1 = require("./upload.controller");
const mongoose_1 = require("@nestjs/mongoose");
const i18n_module_1 = require("../i18n/i18n.module");
const i18n_module_2 = require("../i18n/i18n.module");
const pubfun_1 = require("../../utils/pubfun");
let UploadModule = class UploadModule {
};
UploadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            i18n_module_1.I18nModule,
            (0, pubfun_1.getDatabase)(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18nCategory',
                    schema: i18n_module_2.I18nCaterorySchema,
                    collection: 'category',
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18nLanguage',
                    schema: i18n_module_2.I18nLanguageSchema,
                    collection: 'language',
                },
            ]),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'I18n',
                    schema: i18n_module_2.I18nSchema,
                    collection: 'i18n',
                },
            ]),
        ],
        controllers: [upload_controller_1.UploadController],
        providers: [upload_service_1.UploadService],
    })
], UploadModule);
exports.UploadModule = UploadModule;
//# sourceMappingURL=upload.module.js.map