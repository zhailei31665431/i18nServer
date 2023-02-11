"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const path = require('path');
const middleware_service_1 = require("./middleware/middleware.service");
const transform_interceptor_1 = require("./interceptor/transform.interceptor");
const http_exception_filter_1 = require("./filter/http-exception.filter");
const any_exception_filter_1 = require("./filter/any-exception.filter");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.setGlobalPrefix('fire');
    app.useStaticAssets('public');
    app.engine('art', require('express-art-template'));
    app.useStaticAssets(path.join(__dirname, 'public'));
    app.setViewEngine('art');
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalFilters(new any_exception_filter_1.AllExceptionsFilter());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.use(middleware_service_1.logger);
    await app.listen(80);
}
bootstrap();
//# sourceMappingURL=main.js.map