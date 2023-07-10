import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SchedulerSender } from 'src/scheduler/scheduler.service';
export declare class UsersController {
    private usersService;
    private schedulerService;
    constructor(usersService: UsersService, schedulerService: SchedulerSender);
    create(createUserDto: CreateUserDto): Promise<void>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        birthday: string;
        timezone: string;
        notification_type: string;
    }, unknown> & {})[]>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
