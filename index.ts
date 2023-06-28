
import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

export class Emailer {
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        // user: process.env.GMAIL_USER,
        // pass: process.env.GMAIL_PASSWORD,
        user:'lanjohn@outlook.com',
        pass:'hamqmmnjnpbqymex',
      },
    });
  }

  public sendEmail(mailOptions: MailOptions) {
    return this.transporter.sendMail(mailOptions);
  }
  public sendEmailTo(receipiant: string,subject: string, text: string, htmlBody: string) {
    let msg = {
        // from: process.env.GMAIL_USER,
        // to: email,
        from: 'lanjohn@outlook.com',
        to:receipiant,
        subject: subject,
        text:text,
        html:htmlBody,
      } as MailOptions;
    this.sendEmail(msg);
  }
}

//
// Usage Demo
//

// const emailer = new Emailer();

// let receipiant = 'johnlan@gmail.com';
// let subject = 'Your Subject Here';
// let text = "Text version body: Welcome to the our website";
// let htmlBody = `
//   <h1>HTML version body!</h1>
//   <p>We're glad you've decided to join us. We hope you find everything you're looking for here and enjoy using our site.</p>
// `;

// emailer.sendEmailTo(receipiant,subject,text,htmlBody)