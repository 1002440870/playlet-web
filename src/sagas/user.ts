import { ReduxToken } from "../constants";
import { call, put, takeLatest } from "redux-saga/effects";
import storge from "@/utils/storage";
import { sendAction } from "@/utils/redux";

export function* refershUserInfo() {
    yield takeLatest(ReduxToken.REFRESHE_USERINFO, function* (): any {
        yield put(sendAction(ReduxToken.SET_USERINFO, { userInfo: {} }))
    })
}