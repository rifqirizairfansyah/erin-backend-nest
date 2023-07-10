import { SchedulerSender } from "./scheduler.service";
import { EventService } from "../event/event.service";
import { EVENT_TYPE } from "src/event/event.celebration";
export declare class AWSSchedulerFetcherService implements SchedulerSender {
    private eventService;
    constructor(eventService: EventService);
    schedule(name: string, type: EVENT_TYPE, date: Date, timezone: string): Promise<void>;
}
