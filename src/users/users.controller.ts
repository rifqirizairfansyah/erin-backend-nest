import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SchedulerSender } from 'src/scheduler/scheduler.service';
import { EVENT_TYPE } from 'src/event/event.celebration';


@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private schedulerService: SchedulerSender
    ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    await this.schedulerService.schedule(
      user.first_name,
      EVENT_TYPE[createUserDto.notification_type.toUpperCase()],
      new Date(user.birthday),
      user.timezone)
    return 
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
