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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureDetailsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const secure_details_entity_1 = require("./entities/secure-details.entity");
let SecureDetailsService = class SecureDetailsService {
    constructor(secureDetailsRepository) {
        this.secureDetailsRepository = secureDetailsRepository;
    }
    async signUp(userId, passwordHash) {
        const data = { userId: userId, secureHash: passwordHash };
        return await this.secureDetailsRepository.insert(data);
    }
    async findSecureDetails(userId) {
        return this.secureDetailsRepository.findOne({ userId: userId });
    }
};
SecureDetailsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(secure_details_entity_1.SecureDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SecureDetailsService);
exports.SecureDetailsService = SecureDetailsService;
//# sourceMappingURL=secure-details.service.js.map