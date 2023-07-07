import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import { SenderEntity } from './sender.entity';
import { SenderParam } from './sender.param';

export class SenderEmailEntity extends SenderEntity {
    private transport = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: <string>process.env.EMAIL_SENDER_KEY
        })
    );

    constructor(private params: SenderParam[]) {
        super();
    }

    async notify() {
        try {
            for (const param of this.params) {
                await this.transport.sendMail(param);
            }
        } catch (err) {
            console.log(err)
        }
    }
}
