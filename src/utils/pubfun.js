"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.turnLog = exports.turnUser = exports.turnData = exports.getDatabase = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const config = require('./../../config/dbconfig');
const dbconfig = config['dbconfig'];
console.log(dbconfig, '111');
const getDatabase = (connectionName) => {
    return mongoose_1.MongooseModule.forRoot(`mongodb://${dbconfig.username}:${dbconfig.password}@127.0.0.1:27017/${dbconfig.db}`);
};
exports.getDatabase = getDatabase;
const turnData = (key, data, languageList) => {
    let newData = {
        key: data.key,
        id: data._id,
        name: data.name,
        create_date: Date.parse(data.create_date) / 1000,
        update_data: Date.parse(data.update_data) / 1000,
    };
    if (key == 'category') {
        newData['desc'] = data.desc;
    }
    else if (key == 'language') {
    }
    else {
        newData['oid'] = data.oid;
        languageList &&
            languageList.forEach((i) => {
                newData[i] = data[i];
            });
    }
    return newData;
};
exports.turnData = turnData;
const turnUser = (data) => {
    let newData = {
        id: data._id,
        name: data.username,
        create_date: Date.parse(data.create_date) / 1000,
        update_data: data.update_data ? Date.parse(data.update_data) / 1000 : null,
    };
    return newData;
};
exports.turnUser = turnUser;
const turnLog = (data) => {
    let newData = {
        id: data._id,
        type: data.type,
        data: data.data,
        create_date: Date.parse(data.create_date) / 1000,
        update_data: Date.parse(data.update_data) / 1000,
        user: (0, exports.turnUser)(data.user[0]),
    };
    return newData;
};
exports.turnLog = turnLog;
//# sourceMappingURL=pubfun.js.map