import { UserEntity } from "../entities/user.entity";
declare const CreateUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<UserEntity, "id">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
