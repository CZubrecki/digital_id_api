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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const typeorm_2 = require("typeorm");
const auth_module_1 = require("./auth/auth.module");
const secure_details_service_1 = require("./secure-details/secure-details.service");
const secure_details_module_1 = require("./secure-details/secure-details.module");
const digital_id_controller_1 = require("./digital-id/digital-id.controller");
const digital_id_service_1 = require("./digital-id/digital-id.service");
const digital_id_module_1 = require("./digital-id/digital-id.module");
const email_service_1 = require("./email/email.service");
const email_module_1 = require("./email/email.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({ autoLoadEntities: true, }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            secure_details_module_1.SecureDetailsModule,
            digital_id_module_1.DigitalIdModule,
            email_module_1.EmailModule,
        ],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, digital_id_controller_1.DigitalIdController],
        providers: [app_service_1.AppService, users_service_1.UsersService, secure_details_service_1.SecureDetailsService, digital_id_service_1.DigitalIdService, email_service_1.EmailService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map