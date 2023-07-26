import crypto from 'node:crypto';

export class LiqPayService {
    private language = 'en';
    private currency = 'USD';
    private version = '3';
    private publicKey = process.env.LIQPAY_PUBLIC_KEY;
    private privateKey = process.env.LIQPAY_PRIVATE_KEY;
    private resultUrl = process.env.LIQPAY_CLIENT_REDIRECT;
    private serverUrl = process.env.LIQPAY_SERVER_REDIRECT;

    getPayParams(amount: number, description: string, action = 'pay') {
        const params = {
            public_key: this.publicKey,
            version: this.version,
            language: this.language,
            currency: this.currency,
            action,
            amount,
            description,
            result_url: this.resultUrl,
            server_url: this.serverUrl

        };

        const data = Buffer.from(JSON.stringify(params)).toString('base64');
        const signature = this.getSignature(this.privateKey + data + this.privateKey);

        return { data, signature };
    }

    private getSignature(str: string) {
        const sha1 = crypto.createHash('sha1');
        sha1.update(str);
        return sha1.digest('base64');
    }
}
