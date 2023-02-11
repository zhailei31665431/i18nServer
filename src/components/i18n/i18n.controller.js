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
exports.I18nController = exports.I18nLanguageController = exports.I18nCategoryController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const i18n_service_1 = require("./i18n.service");
const i18n_interceptor_1 = require("./i18n.interceptor");
let I18nCategoryController = class I18nCategoryController {
    constructor(i18nService) {
        this.i18nService = i18nService;
    }
    init() {
        return this.i18nService.initnormal();
    }
    create(createData) {
        return this.i18nService.create('category', createData);
    }
    findAll() {
        return this.i18nService.list('category');
    }
    findOne(id) {
        return this.i18nService.item('category', id);
    }
    update(id, updateData) {
        return this.i18nService.update('category', id, updateData);
    }
    remove(id) {
        return this.i18nService.remove('category', id);
    }
};
__decorate([
    (0, common_1.Post)('init'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], I18nCategoryController.prototype, "init", null);
__decorate([
    (0, common_1.Post)('category'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], I18nCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('category'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], I18nCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('category/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], I18nCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('category/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], I18nCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('category/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], I18nCategoryController.prototype, "remove", null);
I18nCategoryController = __decorate([
    (0, common_1.Controller)('i18n'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(i18n_interceptor_1.I18nInterceptor),
    __metadata("design:paramtypes", [i18n_service_1.I18nService])
], I18nCategoryController);
exports.I18nCategoryController = I18nCategoryController;
let I18nLanguageController = class I18nLanguageController {
    constructor(i18nService) {
        this.i18nService = i18nService;
    }
    create(createData) {
        return this.i18nService.create('language', createData);
    }
    findAll() {
        return this.i18nService.list('language');
    }
    findOne(id) {
        return this.i18nService.item('language', id);
    }
    update(id, updateData) {
        return this.i18nService.update('language', id, updateData);
    }
    remove(id) {
        return this.i18nService.removeLanguage('language', id);
    }
};
__decorate([
    (0, common_1.Post)('language'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], I18nLanguageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('language'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], I18nLanguageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('language/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], I18nLanguageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('language/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], I18nLanguageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('language/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], I18nLanguageController.prototype, "remove", null);
I18nLanguageController = __decorate([
    (0, common_1.Controller)('i18n'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(i18n_interceptor_1.I18nInterceptor),
    __metadata("design:paramtypes", [i18n_service_1.I18nService])
], I18nLanguageController);
exports.I18nLanguageController = I18nLanguageController;
let I18nController = class I18nController {
    constructor(i18nService) {
        this.i18nService = i18nService;
    }
    create(createData) {
        return this.i18nService.create('i18n', createData);
    }
    findOne(id, query) {
        return this.i18nService.item('i18n', id, query);
    }
    update(id, updateData) {
        return this.i18nService.update('i18n', id, updateData);
    }
    remove(id) {
        return this.i18nService.remove('i18n', id);
    }
};
__decorate([
    (0, common_1.Post)('data'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], I18nController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('data/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], I18nController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('data/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], I18nController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('data/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], I18nController.prototype, "remove", null);
I18nController = __decorate([
    (0, common_1.Controller)('i18n'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.UseInterceptors)(i18n_interceptor_1.I18nInterceptor),
    __metadata("design:paramtypes", [i18n_service_1.I18nService])
], I18nController);
exports.I18nController = I18nController;
//# sourceMappingURL=i18n.controller.js.map