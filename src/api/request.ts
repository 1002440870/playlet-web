import Axios, { AxiosRequestConfig } from "axios";
import storage from "@/utils/storage";
import * as utils from "@/utils/system";

const instance = Axios.create({
    baseURL: `/api`,
    timeout: 60000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "mode": "cors",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "force-cache"
    },
});

// 拦截请求处理
instance.interceptors.request.use(async (config: any) => {
    // 系统信息
    let system = await storage.getLocalStorage("system");
    if (system && system.token) {
        config.headers.Token = system.token;
    }
    // 用户信息
    const userInfo = await storage.getLocalStorage("userInfo");
    if (userInfo && userInfo.userToken) {
        config.headers.userToken = userInfo.userToken;
    }
    // 如果是POST请求加密
    if (config.method === "post") {
        config.data = await utils.encrypt(JSON.stringify(config.data));
    }
    return Promise.resolve(config);
}, (error) => {
    return Promise.reject(error);
});

// 拦截响应处理
instance.interceptors.response.use(async (response) => {
    // 解密
    const data: any = await utils.decrypt(response.data)
    response.data = JSON.parse(data);
    return Promise.resolve(response);
}, (error) => {
    return Promise.reject(error)
});

export const post = async (api: string, data?: any, config?: AxiosRequestConfig) => {
    try {
        const response: any = await instance.post(api, data, config)
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export const get = async (api: string, data?: any, config: AxiosRequestConfig = {}) => {
    try {
        config.params = data;
        const response: any = await instance.get(api, config)
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    } catch (error) {
        return Promise.reject(error);
    }
}