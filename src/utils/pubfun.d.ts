export declare const getDatabase: (connectionName?: any) => import("@nestjs/common").DynamicModule;
export declare const turnData: (key: any, data: any, languageList?: any) => {
    key: any;
    id: any;
    name: any;
    create_date: number;
    update_data: number;
};
export declare const turnUser: (data: any) => {
    id: any;
    name: any;
    create_date: number;
    update_data: number;
};
export declare const turnLog: (data: any) => {
    id: any;
    type: any;
    data: any;
    create_date: number;
    update_data: number;
    user: {
        id: any;
        name: any;
        create_date: number;
        update_data: number;
    };
};
