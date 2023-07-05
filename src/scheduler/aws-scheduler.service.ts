import { SchedulerClient, CreateScheduleCommand, DeleteScheduleCommand } from "@aws-sdk/client-scheduler";
import { getDate, getMonth, parseISO } from "date-fns";
import { v4 as uuidv4 } from 'uuid';
import { SchedulerSender } from "./scheduler.service";
import { EventService } from "../event/event.service";

import { Injectable } from '@nestjs/common';
import { EVENT_TYPE } from "src/event/event.celebration";

const client = new SchedulerClient({ region: "us-east-1" });

@Injectable()
export class AWSSchedulerFetcherService implements SchedulerSender {
  constructor(private eventService: EventService) {}

  async schedule(name: string, type: EVENT_TYPE, date: Date, timezone: string) {
    const uniqueId = uuidv4();
    const scheduleDate = new Date(date);
    const ruleName = `${type}_${name}_${uniqueId}`;
    const cronExpression = `0 9 ${getDate(scheduleDate)} ${getMonth(scheduleDate) + 1} ? *`;

    const message = await this.eventService.processEvent(name, name, date, type)
    const rule = {
      Name: ruleName,
      ScheduleExpression: `cron(${cronExpression})`,
      State: "ENABLED",
      Description: `Send birthday email to user ${name} at 9 AM in their timezone`,
      Target: {
        Id: "birthday-email-target",
        Arn: '',
        Input: JSON.stringify({ 
            first_name: name,
            last_name: name,
            type,
            message
         }),
        RoleArn: ''
      },
      ScheduleExpressionTimezone: timezone,
      FlexibleTimeWindow: {
        Mode: "OFF"
      }
    };
  
    try {
      const command = new CreateScheduleCommand(rule);
      client.send(command);
    } catch (error) {
      console.error(error);
    }
    
  }
}