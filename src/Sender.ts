import request from 'request';
import { IConfig, defaultConfig } from './config';

class Sender {
    private config: IConfig;

    constructor(config?: IConfig) {
        this.config = { ...defaultConfig, ...config };
    }

    public send({ channel, message }: { channel: string, message: string }) {
        request.post(this.config.serviceUrl, {
            body: JSON.stringify({
                channel, message
            }),
            headers: {
                "content-type": "application/json"
            }
        })
    }
}

export default Sender;
