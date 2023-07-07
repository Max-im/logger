import nodemailer from 'nodemailer';
// @ts-ignore
import Transport from 'nodemailer-sendinblue-transport';
import { SenderEntity } from './sender.entity';
import { SenderParam } from './sender.param';

export class SenderEmailEntity extends SenderEntity {
    private transporter = nodemailer.createTransport(
        new Transport({ apiKey: <string>process.env.EMAIL_SENDER_KEY })
    );

    constructor(private params: SenderParam[]) {
        super();
    }

    notify() {
        // try {
        for (const param of this.params) {
            this.transporter.sendMail(param);
        }
        // } catch (err) {
        //     console.log(err);
        // }
    }
}
