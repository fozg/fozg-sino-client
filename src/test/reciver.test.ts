import { Reciver } from "../index";

var client = new Reciver();

client.track("TWEET");
client.onNotify((notification: { channel: string, message: string }) => {
    console.log(notification);
})
