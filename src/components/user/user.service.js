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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const pubfun_1 = require("../../utils/pubfun");
let UserService = class UserService {
    constructor(jwtService, UserModule) {
        this.jwtService = jwtService;
        this.UserModule = UserModule;
    }
    async validateUser(payload) {
        const user = await this.UserModule.findOne({
            _id: payload['sub'],
        });
        if (user) {
            if ((user.username === payload.username && user.password) ===
                payload.password) {
                return {
                    code: 1,
                    user,
                };
            }
            else {
                return {
                    code: 0,
                    user: null,
                };
            }
        }
        return {
            code: 0,
            user: null,
        };
    }
    async login(data) {
        let res = await this.UserModule.findOne({ username: data.username }).exec();
        if (res) {
            let userData = res;
            if (res.password === data.password) {
                const payload = {
                    username: userData.username,
                    sub: userData._id,
                    password: userData.password,
                };
                return {
                    code: 1,
                    message: 'success',
                    data: {
                        token: this.jwtService.sign(payload),
                    },
                };
            }
            else {
                return {
                    code: 0,
                    message: 'Password Error',
                };
            }
        }
        else {
            if (data.username === 'admin' && data.password === 'admin') {
                const newData = Object.assign({}, {
                    username: 'admin',
                    password: 'admin',
                    create_date: Date.parse(new Date().toString()),
                });
                let newUser = new this.UserModule(newData);
                let res = await newUser.save();
                const payload = {
                    username: res.username,
                    sub: res._id,
                    password: res.password,
                };
                return {
                    code: 1,
                    message: 'success',
                    data: {
                        token: this.jwtService.sign(payload),
                    },
                };
            }
            else {
                return {
                    code: 0,
                    message: 'This user was not found',
                };
            }
        }
    }
    async createUser(createUserDto) {
        let hasuser = await this.UserModule.findOne({
            username: createUserDto.username,
        }).exec();
        if (hasuser !== null) {
            return {
                code: 0,
                message: 'Current username already exists',
            };
        }
        const newData = Object.assign({}, createUserDto, {
            create_date: Date.now(),
            update_data: Date.now(),
        });
        let newUser = new this.UserModule(newData);
        let res = await newUser.save();
        if (res) {
            return {
                code: 1,
                data: (0, pubfun_1.turnUser)(res),
                message: 'success',
            };
        }
        else {
            return {
                code: 0,
                message: 'error',
            };
        }
    }
    async remove(id) {
        let res = await this.UserModule.deleteOne({ _id: id });
        if (res) {
            return {
                code: 1,
                message: 'success',
            };
        }
        else {
            return {
                code: 1,
                message: 'Server error, please try again later',
            };
        }
    }
    async list() {
        let res = await this.UserModule.find({}).sort({ create_date: -1 });
        return {
            code: 1,
            list: res.map((item) => {
                return (0, pubfun_1.turnUser)(item);
            }),
        };
    }
    async info(id) {
        let res = await this.UserModule.find({
            _id: id,
        }).select('username');
        return {
            code: 1,
            data: {
                id: id,
                username: res[0].username,
            },
        };
    }
    async update(data) {
        let res = await this.UserModule.updateOne({ username: data['username'] }, { password: data['password'] }, { update_data: Date.now() }).exec();
        if (res) {
            return {
                code: 1,
                message: 'success',
            };
        }
        else {
            return {
                code: 0,
                message: 'error',
            };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)('Users')),
    __metadata("design:paramtypes", [jwt_1.JwtService, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map