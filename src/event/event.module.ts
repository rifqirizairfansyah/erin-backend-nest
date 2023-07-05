import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EVENT_TYPE, BirthdayCelebration, AnniversaryCelebration } from './event.celebration';

@Module({
  providers: [
    EventService,
    {
      provide: 'EVENT_GATEWAYS',
      useFactory: (eventService: EventService) => {
        eventService.createEvent(EVENT_TYPE.BIRTHDAY, new BirthdayCelebration());
        eventService.createEvent(EVENT_TYPE.ANNIVERSARY, new AnniversaryCelebration());
      },
      inject: [EventService]
    }
  ],
  exports: [EventService]
})
export class EventModule {}
