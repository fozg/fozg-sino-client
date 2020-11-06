import { Reciver } from "../index";

var client = new Reciver({ path: "/notification" });

client.track("TWEET");
client.onNotify((notification: { channel: string, message: string }) => {
    console.log(notification);
})
