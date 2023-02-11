"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogModule = exports.I18nLogSchema = void 0;
const common_1 = require("@nestjs/common");
const log_service_1 = require("./log.service");
const log_controller_1 = require("./log.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_module_1 = require("../user/user.module");
const pubfun_1 = require("../../utils/pubfun");
exports.I18nLogSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    name: String,
    type: String,
    data: Object,
    create_date: { type: Date, default: Date.now },
    update_data: { type: Date, default: Date.now },
}, { strict: false });
let LogModule = class LogModule {
};
LogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            (0, pubfun_1.getDatabase)(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Log',
                    schema: exports.I18nLogSchema,
                    collection: 'log',
                },
            ]),
        ],
        controllers: [log_controller_1.LogController],
        providers: [log_service_1.LogService],
        exports: [log_service_1.LogService],
    })
], LogModule);
exports.LogModule = LogModule;
//# sourceMappingURL=log.module.js.map