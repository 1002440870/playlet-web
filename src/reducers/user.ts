import { ReduxToken } from "@/constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
    userInfo: {} as any, // 用户信息
}

const setUserInfo = createAction(ReduxToken.SET_USERINFO);

export default createReducer(initState, (builder) => {
    builder.addCase(setUserInfo, (state, action) => {
        const { userInfo }: any = action?.payload;
        state.userInfo = userInfo;
    }).addDefaultCase((state) => state);
})