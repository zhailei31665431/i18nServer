"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const baseLogPath = path.resolve(__dirname, '../../logs');
const log4jsConfig = {
    appenders: {
        console: {
            type: 'dateFile',
            filename: `${baseLogPath}/all/all.log`,
            alwaysIncludePattern: true,
            layout: {
                type: 'pattern',
                pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
            },
            pattern: 'yyyy-MM-dd',
            daysToKeep: 60,
            numBackups: 3,
            keepFileExt: true,
        },
        access: {
            type: 'dateFile',
            filename: `${baseLogPath}/access/access.log`,
            alwaysIncludePattern: true,
            pattern: 'yyyyMMdd',
            daysToKeep: 60,
            numBackups: 3,
            category: 'http',
            keepFileExt: true,
        },
        app: {
            type: 'dateFile',
            filename: `${baseLogPath}/app-out/app.log`,
            alwaysIncludePattern: true,
            layout: {
                type: 'pattern',
                pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
            },
            pattern: 'yyyyMMdd',
            daysToKeep: 60,
            numBackups: 3,
            keepFileExt: true,
        },
        errorFile: {
            type: 'dateFile',
            filename: `${baseLogPath}/errors/error.log`,
            alwaysIncludePattern: true,
            layout: {
                type: 'pattern',
                pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
            },
            pattern: 'yyyyMMdd',
            daysToKeep: 60,
            numBackups: 3,
            keepFileExt: true,
        },
        info: {
            type: 'dateFile',
            filename: `${baseLogPath}/info/info.log`,
            alwaysIncludePattern: true,
            layout: {
                type: 'pattern',
                pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
            },
            pattern: 'yyyyMMdd',
            daysToKeep: 60,
            numBackups: 3,
            keepFileExt: true,
        },
        errors: {
            type: 'logLevelFilter',
            level: 'ERROR',
            appender: 'errorFile',
        },
    },
    categories: {
        default: {
            appenders: ['console', 'app', 'errors'],
            level: 'DEBUG',
        },
        info: { appenders: ['console', 'app', 'errors'], level: 'info' },
        access: { appenders: ['console', 'app', 'errors'], level: 'info' },
        http: { appenders: ['access'], level: 'DEBUG' },
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID',
};
exports.default = log4jsConfig;
//# sourceMappingURL=log4.js.map