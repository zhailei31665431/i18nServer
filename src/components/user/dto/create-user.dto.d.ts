export declare class CreateUserDto {
    username: string;
    password: string | number;
    create_date: Date;
}
export declare class UserDto {
    readonly username: string | number;
    readonly password: string | number;
}
