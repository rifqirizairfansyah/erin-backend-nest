export abstract class EventCelebration {
  abstract celebrationMessage(first_name:string, last_name: string, date: Date): string;
}

export class BirthdayCelebration implements EventCelebration {
  celebrationMessage(first_name: string, last_name: string, date: Date): string {
    return `Happy Birthday, ${first_name} ${last_name} ${date}!`;
  }
}

export class AnniversaryCelebration implements EventCelebration {
  celebrationMessage(first_name: string, last_name: string, date: Date): string {
    return `Happy Anniversary, ${first_name} ${last_name} ${date}!`;
  }
}

export enum EVENT_TYPE {
  BIRTHDAY = 'birthday',
  ANNIVERSARY = 'anniversary'
}