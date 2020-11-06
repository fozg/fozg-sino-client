
export interface IConfig {
    serviceUrl?: string,
    path?: string
}

export const defaultConfig = {
    serviceUrl: "http://localhost:3000",
    path: "/notification"
}
