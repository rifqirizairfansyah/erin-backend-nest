"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_TYPE = exports.AnniversaryCelebration = exports.BirthdayCelebration = exports.EventCelebration = void 0;
class EventCelebration {
}
exports.EventCelebration = EventCelebration;
class BirthdayCelebration {
    celebrationMessage(first_name, last_name, date) {
        return `Happy Birthday, ${first_name} ${last_name} ${date}!`;
    }
}
exports.BirthdayCelebration = BirthdayCelebration;
class AnniversaryCelebration {
    celebrationMessage(first_name, last_name, date) {
        return `Happy Anniversary, ${first_name} ${last_name} ${date}!`;
    }
}
exports.AnniversaryCelebration = AnniversaryCelebration;
var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE["BIRTHDAY"] = "birthday";
    EVENT_TYPE["ANNIVERSARY"] = "anniversary";
})(EVENT_TYPE || (exports.EVENT_TYPE = EVENT_TYPE = {}));
//# sourceMappingURL=event.celebration.js.map