"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerModule = void 0;
const common_1 = require("@nestjs/common");
const scheduler_service_1 = require("./scheduler.service");
const scheduler_controller_1 = require("./scheduler.controller");
const aws_scheduler_service_1 = require("./aws-scheduler.service");
const event_module_1 = require("../event/event.module");
const event_service_1 = require("../event/event.service");
let SchedulerModule = exports.SchedulerModule = class SchedulerModule {
};
exports.SchedulerModule = SchedulerModule = __decorate([
    (0, common_1.Module)({
        imports: [event_module_1.EventModule],
        controllers: [scheduler_controller_1.SchedulerController],
        providers: [
            {
                provide: scheduler_service_1.SchedulerSender,
                useFactory: (eventService) => new aws_scheduler_service_1.AWSSchedulerFetcherService(eventService),
                inject: [event_service_1.EventService]
            }
        ],
        exports: [scheduler_service_1.SchedulerSender]
    })
], SchedulerModule);
//# sourceMappingURL=scheduler.module.js.map