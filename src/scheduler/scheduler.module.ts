import { Module } from '@nestjs/common';
import { SchedulerSender } from './scheduler.service';
import { SchedulerController } from './scheduler.controller';
import { AWSSchedulerFetcherService } from './aws-scheduler.service';
import { EventModule } from '../event/event.module';
import { EventService } from '../event/event.service';

@Module({
  imports: [EventModule],
  controllers: [SchedulerController],
  providers: [
    {
      provide: SchedulerSender,
      useFactory: (eventService: EventService) => new AWSSchedulerFetcherService(eventService),
      inject: [EventService]
    }
  ],
  exports: [SchedulerSender]
})
export class SchedulerModule {}