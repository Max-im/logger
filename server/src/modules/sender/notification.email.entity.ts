import nodemailer from 'nodemailer';
// @ts-ignore
import Transport from 'nodemailer-sendinblue-transport';
import { NotificationEntity } from './notification.entity';
import { User } from '@prisma/client';

interface ISendParam {
    from: string;
    to: string;
    subject: string;
    html: string
}
from: this.sender,
    to: this.admin,
        subject: `🎉💰🔥 User ${data.user.email} just placed Order ${data.order.price}`,
            html: new PlaceOrderTemplate(
                data.user,
                data.order,
            ).getTemplate(),

export class NotificationEmailEntity extends NotificationEntity {
    private transporter = nodemailer.createTransport(
        new Transport({ apiKey: <string>process.env.EMAIL_SENDER_KEY })
    );



    notify(users: User[]) {
        const params = users.map(user => user)
        try {
            for (const param of params) {
                this.transporter.sendMail(param);
            }
        } catch (err) {
            console.log(err);
        }
    }

}