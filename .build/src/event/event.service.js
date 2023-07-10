"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
let EventService = exports.EventService = class EventService {
    constructor() {
        this.eventCelebration = {};
    }
    createEvent(eventType, gateway) {
        return this.eventCelebration[eventType] = gateway;
    }
    async processEvent(first_name, last_name, date, eventType) {
        const gateway = this.eventCelebration[eventType];
        if (gateway) {
            return await gateway.celebrationMessage(first_name, last_name, date);
        }
        else {
            throw new Error('Unsupported payment method!');
        }
    }
};
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)()
], EventService);
//# sourceMappingURL=event.service.js.map