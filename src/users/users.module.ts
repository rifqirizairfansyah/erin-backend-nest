import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SchedulerModule } from 'src/scheduler/scheduler.module';

@Module({
  imports: [PrismaModule, SchedulerModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
