import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        first_name: string;
        last_name: string;
        birthday: string;
        timezone: string;
        notification_type: string;
    }, unknown> & {})[]>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
