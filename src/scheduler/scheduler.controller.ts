import { Controller } from '@nestjs/common';
import { SchedulerSender } from './scheduler.service';

@Controller('scheduler')
export class SchedulerController {
  constructor(private readonly schedulerService: SchedulerSender) {}
}
