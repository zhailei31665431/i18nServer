import { Strategy } from 'passport-local';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    constructor();
    validate(username: string | number, password: string | undefined): Promise<boolean>;
}
export {};
