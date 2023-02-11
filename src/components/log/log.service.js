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
exports.LogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_service_1 = require("./../user/user.service");
const pubfun_1 = require("../../utils/pubfun");
let LogService = class LogService {
    constructor(usersService, LogModule) {
        this.usersService = usersService;
        this.LogModule = LogModule;
    }
    async create(data) {
        let newData = new this.LogModule(data);
        let res = await newData.save();
    }
    async list() {
        let res = await this.LogModule.aggregate([
            {
                $lookup: {
                    from: 'user',
                    localField: 'uid',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            {
                $sort: {
                    create_date: -1,
                },
            },
        ]);
        res = res.map((item) => {
            return (0, pubfun_1.turnLog)(item);
        });
        return {
            code: 1,
            list: res,
        };
    }
};
LogService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)('Log')),
    __metadata("design:paramtypes", [user_service_1.UserService, Object])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map