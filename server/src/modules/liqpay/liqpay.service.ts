import crypto from 'node:crypto';

export class LiqPayService {
    private language = 'en';
    private currency = 'USD';
    private version = '3';
    private publicKey = process.env.LIQPAY_PUBLIC_KEY;
    private privateKey = process.env.LIQPAY_PRIVATE_KEY;

    getPayParams(amount: number, description: string) {
        const params = {
            public_key: this.publicKey,
            version: this.version,
            language: this.language,
            currency: this.currency,
            action: 'pay',
            amount,
            description,
            result_url: process.env.LIQPAY_CLIENT_REDIRECT
        };

        const data = Buffer.from(JSON.stringify(params)).toString('base64');
        const signature = this.getSignature(this.privateKey + data + this.privateKey);

        return { data, signature };
    }

    getSignature(str: string) {
        const sha1 = crypto.createHash('sha1');
        sha1.update(str);
        return sha1.digest('base64');
    };
}