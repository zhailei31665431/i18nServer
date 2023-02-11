"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./../../jwt.strategy");
const local_strategy_1 = require("./../../local.strategy");
const jwt_2 = require("./../../../config/jwt");
const pubfun_1 = require("../../utils/pubfun");
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    create_date: { type: Date, default: Date.now },
    update_data: { type: Date, default: Date.now },
});
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            (0, pubfun_1.getDatabase)(),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Users',
                    schema: UserSchema,
                    collection: 'user',
                },
            ]),
            jwt_1.JwtModule.register({
                secret: jwt_2.default,
                signOptions: { expiresIn: '8h' },
            }),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map