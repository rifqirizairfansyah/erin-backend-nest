import { EventCelebration, EVENT_TYPE } from './event.celebration';
export declare class EventService {
    private eventCelebration;
    createEvent(eventType: EVENT_TYPE, gateway: EventCelebration): EventCelebration;
    processEvent(first_name: string, last_name: string, date: Date, eventType: EVENT_TYPE): Promise<string>;
}
