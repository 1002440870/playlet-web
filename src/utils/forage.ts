import localforage from 'localforage';

const get = async (key: string) => {
    return await localforage.getItem(key);;
}

const set = async (key: string, value: any) => {
    return await localforage.setItem(key, value);
}

const exist = async (key: string) => {
    return await localforage.getItem(key) != null;
}

export {
    get,
    set,
    exist,
}