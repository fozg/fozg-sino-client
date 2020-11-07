import { Sender } from "../index";

new Sender({ serviceUrl: "https://fozg.dev/notification" }).send({ channel: "DEV-CALC-ORIGIN-PRICE", message: "99" })