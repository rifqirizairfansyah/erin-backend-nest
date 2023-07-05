import { Injectable } from '@nestjs/common';
import { EventCelebration, EVENT_TYPE } from './event.celebration';

@Injectable()
export class EventService {
  private eventCelebration: Record<string, EventCelebration> = {};
  
  public createEvent(
    eventType: EVENT_TYPE,
    gateway: EventCelebration
  ) {
    return this.eventCelebration[eventType] = gateway;
  }

  public async processEvent(first_name: string, last_name: string, date: Date, eventType: EVENT_TYPE) {
    const gateway = this.eventCelebration[eventType];
    if (gateway) {
      return await gateway.celebrationMessage(first_name, last_name, date);
    } else {
      throw new Error('Unsupported payment method!');
    }
  }
}
