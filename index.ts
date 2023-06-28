
import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

export class Emailer {
  private readonly transporter: nodemailer.Transporter;

//   constructor() {
//     this.transporter = nodemailer.createTransport({
//       service: "outlook",
//       auth: {
//         user: process.env.MAILUSER,
//         pass: process.env.MAILPASSWORD,
//         // user:'lanjohn@outlook.com',
//         // pass:'hamqmmnjnpbqymex',
//       },
//     });
//   }

  constructor(user: string, pass: string) {
    this.transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: user,
        pass: pass,
        // user:'lanjohn@outlook.com',
        // pass:'hamqmmnjnpbqymex',
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

let user = process.env.MAILUSER as string;
let pass = process.env.MAILPASSWORD as string;

const emailer = new Emailer(user, pass);

let receipiant = 'johnlan@gmail.com';
let subject = 'Your Subject Here new';
let text = "Text version body: Welcome to the our website";
let htmlBody = `
  <h1>HTML version body!</h1>
  <p>We're glad you've decided to join us. We hope you find everything you're looking for here and enjoy using our site.</p>
`;

emailer.sendEmailTo(receipiant,subject,text,htmlBody)