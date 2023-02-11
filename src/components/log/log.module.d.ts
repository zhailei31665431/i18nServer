import * as mongoose from 'mongoose';
export declare const I18nLogSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    create_date: Date;
    update_data: Date;
    data?: any;
    type?: string;
    name?: string;
    uid?: mongoose.Types.ObjectId;
}>;
export declare class LogModule {
}
