export declare abstract class EventCelebration {
    abstract celebrationMessage(first_name: string, last_name: string, date: Date): string;
}
export declare class BirthdayCelebration implements EventCelebration {
    celebrationMessage(first_name: string, last_name: string, date: Date): string;
}
export declare class AnniversaryCelebration implements EventCelebration {
    celebrationMessage(first_name: string, last_name: string, date: Date): string;
}
export declare enum EVENT_TYPE {
    BIRTHDAY = "birthday",
    ANNIVERSARY = "anniversary"
}
