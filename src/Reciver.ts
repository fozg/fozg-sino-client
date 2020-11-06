
import io from 'socket.io-client';
import { IConfig, defaultConfig } from './config';

class Reciver {
    private config: IConfig;
    private socket: SocketIOClient.Socket;
    private channels: string[];

    constructor(config?: IConfig) {
        this.config = { ...defaultConfig, ...config };
        this.socket = io(this.config.serviceUrl);
        this.channels = [];
    }

    public track(channel: string) {
        this.channels.push(channel);
    }

    public onNotify(cb: ({ channel, message }: { channel: string, message: string }) => void) {
        this.channels.forEach(channel => {
            this.socket.on(channel, (message: string) => {
                console.log(message)
                cb({ channel, message });
            })
        })
    }

    public onConnect(cb: () => void) {
        this.socket.on("connect", cb);
    }

    public onDisconect(cb: () => void) {
        this.socket.on("disconect", cb);
    }
}

export default Reciver;
