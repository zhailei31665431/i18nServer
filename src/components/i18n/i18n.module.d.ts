import * as mongoose from 'mongoose';
export declare const I18nCaterorySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    create_date: Date;
    update_data: Date;
    desc?: string;
    name?: string;
    key?: string;
}>;
export declare const I18nLanguageSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    create_date: Date;
    update_data: Date;
    name?: string;
    key?: string;
}>;
export declare const I18nSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    create_date: Date;
    update_data: Date;
    oid?: string;
    key?: string;
}>;
export declare class I18nModule {
}
