import { useDispatch, useSelector } from "react-redux";

const useRedux = () => {

    const dispatch = useDispatch();

    // 用户信息
    const { userInfo } = useSelector((state: any) => ({ ...state?.user }));
    const isLogin = !!userInfo?.id;

    // 发送事件
    const sendReduxAction = (type: string, data?: any) => {
        dispatch({ type, payload: data });
    }

    return { sendReduxAction, userInfo, isLogin }

}

export default useRedux;
