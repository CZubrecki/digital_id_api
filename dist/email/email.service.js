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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require("nodemailer");
let EmailService = class EmailService {
    constructor() { }
    async sendEmail() {
        const transporter = nodemailer.createTransport(smtpTransport({
            host: 'debugmail.io',
            port: 9025,
            auth: {
                user: process.env.DEBUG_EMAIL,
                pass: process.env.DEBUG_EMAIL_PASS,
            },
        }));
        const info = await transporter.sendMail({
            from: 'cmzubrecki@gmail.com',
            to: "bar@example.com, baz@example.com",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
            attachments: [
                {
                    filename: 'text1.txt',
                    content: 'hello world!'
                },
            ],
        });
    }
};
EmailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map