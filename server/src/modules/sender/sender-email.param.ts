import { SenderParam } from './sender.param';

export class SenderEmailParam extends SenderParam {
    from = <string>process.env.EMAIL_SENDER;
    to: string;
    subject: string;
    html: string;

    constructor(userData: any) {
        super();

        this.to = userData.email;
        this.subject = userData.notification.logLevel;
        this.html = `<p>${userData.payload}</p>`;
    }
}
