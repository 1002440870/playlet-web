import { ReduxToken } from "@/constants";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initState = {
    system: {} as any, // 系统信息
}

const setSystem = createAction(ReduxToken.SET_SYSTEM);

export default createReducer(initState, (builder) => {
    builder.addCase(setSystem, (state, action) => {
        const { system }: any = action?.payload;
        state.system = system;
    }).addDefaultCase((state) => state);
})