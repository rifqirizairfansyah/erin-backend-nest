import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class SchedulerSender {
  abstract schedule(name: string, type: string, date: Date, timezone: string): any;
}
