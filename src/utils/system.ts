import CryptoJS from 'crypto-js';
import storage from './storage';
import * as request from "@/api/request";

// 颜色转换
export const setAlpha = (alpha: string) => {
    var color = alpha.replace("#", "");
    return parseInt(color, 16);
}

// 判断是否是ios
export const isIos = () => {
    return /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

// 判断是否是webview环境
export function hasWebView(): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes("slots-webview-ios") || userAgent.includes("slots-webview-android");
}

// 加密
export const encrypt = async (params: string) => {
    const system = await storage.getLocalStorage("system");
    const aesKey = CryptoJS.enc.Utf8.parse(system ? system.aesKey : "82GotaV2AN5gRfve");
    const encrypted = CryptoJS.AES.encrypt(params, aesKey, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString().toUpperCase();
}

// 解密
export const decrypt = async (params: string) => {
    const system = await storage.getLocalStorage("system");
    if (system && system.aesKey) {
        const keyUtf8 = CryptoJS.enc.Utf8.parse(system.aesKey);
        const ciphertext = CryptoJS.enc.Hex.parse(params);
        const cipherParams: any = { ciphertext: ciphertext };
        const decrypted = CryptoJS.AES.decrypt(cipherParams, keyUtf8, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    return null;
}

// 获取随机数
export const getRandom = (min: number, max: number) => {
    return min + Math.round(Math.random() * (max - min));
}

// OSS地址
export const OssBaseUrl = "https://resource.slotsrushs.com";

// 获取OSS路径
export const getOssUrl = (src: any) => {
    if (src && src.indexOf("appgalaxy") > -1) {
        return `${OssBaseUrl}/${src}`;
    }
    return src;
}

// 数据转换
export const numFormat = (num: any) => {
    if (num >= 1000) {
        num = Math.round(num / 100) / 10 + 'K'
    }
    return num
}

export const numFormatMore = (num: any) => {
    const c = num.toString().indexOf(".") !== -1 ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
    return c;
    // return num;
}

// 下载多个文件
export const downloadFiles = async (urls: any) => {
    const promises = urls.map((url: string) => fetch(url));
    const responses = await Promise.all(promises);
    // 获取所有响应的Blob对象
    let cachesUrls: any = [];
    for (let i = 0; i < responses.length; i++) {
        const blob = await responses[i].blob();
        cachesUrls.push(blob);
    }
    return Promise.resolve(cachesUrls);
}

/**
 * 图片blob转图片base64
 * @param blob 
 */
export const blobToBase64 = (blob: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            const base64 = reader.result;
            resolve(base64);
        }
        reader.onerror = error => reject(error);
    });
}

/**
 * 图片base64转blob
 * @param base64 base64图片
 */
export const base64ToBlob = (base64: string) => {
    let bstr = window.atob(base64),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: base64 })
}

// 获取权重比例
export const getAdWeightRatio = (event: any) => {
    const { providers } = event;
    const weightList = providers.map((item: any) => item.weight);
    const weightSum = weightList.reduce((a: any, b: any) => a + b, 0);
    const random = Math.ceil(Math.random() * weightSum);
    let count = 0;
    for (let i = 0; i < providers.length; i++) {
        count += providers[i].weight;
        if (random <= count) {
            return i;
        }
    }
    return 0;
}


export const getImages = (options: any) => {
    if (typeof options === "object") {
        let { json } = options;
        let newAssets = json.assets;
        newAssets.forEach((element: any) => {
            const test = options[`${element.u}${element.p}`];
            element.p = test;
            element.u = ''
        });
        return options.json;
    }
}

export const getLocalImages = (options: any, fileName: string) => {
    options.assets.forEach((element: any) => {
        element.u = '';
        if (element.p.indexOf("/assets/lottie") <= -1) {
            element.p = `/assets/lottie/${fileName}/${element.p}`;
        }
    });
    return options;
}