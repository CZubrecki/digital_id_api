import { Injectable } from '@nestjs/common';
const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require("nodemailer");

@Injectable()
export class EmailService {
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
}
