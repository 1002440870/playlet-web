const getLocalStorage = (key: string): any => {
    return new Promise((resolve) => {
        try {
            let value = localStorage.getItem(key);
            if (value) {
                value = JSON.parse(value);
            }
            return resolve(value);
        } catch (error) {
            return resolve(null);
        }
    });
}

const setLocalStorage = (key: string, value: object) => {
    return new Promise((resolve) => {
        localStorage.setItem(key, JSON.stringify(value));
        resolve(true);
    });
}

const clearLocalStorage = (key: string) => {
    return new Promise((resolve) => {
        localStorage.setItem(key, "");
        resolve(true);
    });
}

const setSessionStorage = (key: string, value: object) => {
    return new Promise((resolve) => {
        sessionStorage.setItem(key, JSON.stringify(value));
        resolve(true);
    });
}

const getSessionStorage = (key: string): any => {
    return new Promise((resolve) => {
        let value = sessionStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        }
        return resolve(value);
    });
}

const clearSessionStorage = (key: string) => {
    return new Promise((resolve) => {
        sessionStorage.setItem(key, "");
        resolve(true);
    });
}

export default {
    getLocalStorage,
    setLocalStorage,
    clearLocalStorage,
    setSessionStorage,
    getSessionStorage,
    clearSessionStorage
}