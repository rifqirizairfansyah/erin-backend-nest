"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSSchedulerFetcherService = void 0;
const client_scheduler_1 = require("@aws-sdk/client-scheduler");
const uuid_1 = require("uuid");
const event_service_1 = require("../event/event.service");
const common_1 = require("@nestjs/common");
const client = new client_scheduler_1.SchedulerClient({ region: "us-east-1" });
let AWSSchedulerFetcherService = exports.AWSSchedulerFetcherService = class AWSSchedulerFetcherService {
    constructor(eventService) {
        this.eventService = eventService;
    }
    async schedule(name, type, date, timezone) {
        const uniqueId = (0, uuid_1.v4)();
        const scheduleDate = new Date(date);
        const ruleName = `${type}_${uniqueId}`;
        const cronExpression = `* * * * ? *`;
        const message = await this.eventService.processEvent(name, name, date, type);
        const rule = {
            Name: ruleName,
            ScheduleExpression: `cron(${cronExpression})`,
            State: "ENABLED",
            Description: `Sending ${type} to email ${name} at 9 AM in their timezone`,
            Target: {
                Id: uniqueId,
                Arn: 'arn:aws:sqs:us-east-1:452999660372:email_queue',
                Input: JSON.stringify({
                    name: name,
                    type,
                    message
                }),
                RoleArn: 'arn:aws:iam::452999660372:role/EventScheduleRole'
            },
            ScheduleExpressionTimezone: timezone,
            FlexibleTimeWindow: {
                Mode: "OFF"
            }
        };
        try {
            const command = new client_scheduler_1.CreateScheduleCommand(rule);
            client.send(command);
        }
        catch (error) {
            console.error(error);
        }
    }
};
exports.AWSSchedulerFetcherService = AWSSchedulerFetcherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [event_service_1.EventService])
], AWSSchedulerFetcherService);
//# sourceMappingURL=aws-scheduler.service.js.map