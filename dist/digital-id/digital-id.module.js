"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalIdModule = void 0;
const common_1 = require("@nestjs/common");
const digital_id_controller_1 = require("./digital-id.controller");
const digital_id_service_1 = require("./digital-id.service");
const email_module_1 = require("../email/email.module");
let DigitalIdModule = class DigitalIdModule {
};
DigitalIdModule = __decorate([
    common_1.Module({
        imports: [
            email_module_1.EmailModule,
        ],
        controllers: [digital_id_controller_1.DigitalIdController],
        providers: [digital_id_service_1.DigitalIdService],
        exports: [digital_id_service_1.DigitalIdService],
    })
], DigitalIdModule);
exports.DigitalIdModule = DigitalIdModule;
//# sourceMappingURL=digital-id.module.js.map