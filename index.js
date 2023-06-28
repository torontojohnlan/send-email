"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emailer = void 0;
var nodemailer = require("nodemailer");
var Emailer = /** @class */ (function () {
    function Emailer() {
        this.transporter = nodemailer.createTransport({
            service: "outlook",
            auth: {
                // user: process.env.GMAIL_USER,
                // pass: process.env.GMAIL_PASSWORD,
                user: 'lanjohn@outlook.com',
                pass: 'hamqmmnjnpbqymex',
            },
        });
    }
    Emailer.prototype.sendEmail = function (mailOptions) {
        return this.transporter.sendMail(mailOptions);
    };
    Emailer.prototype.sendEmailTo = function (receipiant, subject, text, htmlBody) {
        var msg = {
            // from: process.env.GMAIL_USER,
            // to: email,
            from: 'lanjohn@outlook.com',
            to: receipiant,
            subject: subject,
            text: text,
            html: htmlBody,
        };
        this.sendEmail(msg);
    };
    return Emailer;
}());
exports.Emailer = Emailer;
var emailer = new Emailer();
var receipiant = 'johnlan@gmail.com';
var subject = 'Your Subject Here';
var text = "Text version body: Welcome to the our website";
var htmlBody = "\n  <h1>HTML version body!</h1>\n  <p>We're glad you've decided to join us. We hope you find everything you're looking for here and enjoy using our site.</p>\n";
emailer.sendEmailTo(receipiant, subject, text, htmlBody);
