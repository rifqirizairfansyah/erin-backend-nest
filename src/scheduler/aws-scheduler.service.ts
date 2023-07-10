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
    const ruleName = `${type}_${name}_${uniqueId}`;
    const cronExpression = `0 9 ${getDate(date)} ${getMonth(date) + 1} ? *`;

    const message = await this.eventService.processEvent(name, name, date, type)
    const rule = {
      Name: ruleName,
      ScheduleExpression: `cron(${cronExpression})`,
      State: "ENABLED",
      Description: `Send ${type} email to user ${name} at 9 AM in their timezone`,
      Target: {
        Id: uniqueId,
        Arn: "arn:aws:events:us-east-1:452999660372:event-bus/default",
        EventBridgeParameters: {
          DetailType: "email",
          Source: "myapp.erin",
        },
        Input: JSON.stringify({ 
            first_name: name,
            last_name: name,
            type: type,
            message: message
         }),
        RoleArn: 'arn:aws:iam::452999660372:role/EventScheduleRole'
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