import React, { ComponentType } from "react";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "../reducers/index";
import sagas from "../sagas/index";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

/** 中间件列表 */
const middlewares: any[] = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const persistConfig = {
    key: "rootKeyPersist",
    storage,
    // 白名单应用中的路由会永久缓存起来
    whitelist: ["user", "system"],
    version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(middlewares),
    devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);
sagaMiddleware.run(sagas);

export const withReduxProvider = (Component: ComponentType) => (props: any) => {
    return React.createElement(Provider, {
        store,
        children: React.createElement(PersistGate, { loading: null, persistor }, React.createElement(Component, props)),
    });
};
