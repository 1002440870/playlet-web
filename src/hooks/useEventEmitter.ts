import { EventEmitter } from "events";

class AppEventEmitter extends EventEmitter {
    private static instance: AppEventEmitter;
    private constructor() {
        super();
    }
    public static getInstance(): AppEventEmitter {
        if (!AppEventEmitter.instance) {
            AppEventEmitter.instance = new AppEventEmitter();
        }
        return AppEventEmitter.instance;
    }
}

export const useEventEmitter = () => {
    const eventEmitter = AppEventEmitter.getInstance();

    // 发送订阅信息
    const emit = (eventType: string, payload: any): void => {
        eventEmitter.emit(eventType, payload);
    };

    // 监听订阅信息
    const on = (eventType: string, callback?: (payload: any) => void): void => {
        eventEmitter.on(eventType, callback ? callback : () => {});
    };

    // 取消订阅信息
    const off = (eventType: string, callback?: (payload: any) => void): void => {
        eventEmitter.off(eventType, callback ? callback : () => {});
    };

    return { emit, on, off };
};
