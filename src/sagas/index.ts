import { all, fork } from 'redux-saga/effects';
import * as userSages from "./user";

export default function* rootSaga() {
    yield all([
        ...Object.values(userSages).map(item => fork(item)),
    ])
}
