import { user as userModel } from "@prisma/client";
export declare class UserEntity implements userModel {
    id: string;
    first_name: string;
    last_name: string;
    birthday: string;
    timezone: string;
    notification_type: string;
}
