import { useNavigate } from "react-router-dom";


export const useRouteNavigate = () => {
    const webview: any = window;
    const nav = useNavigate();

    /**
     * 替换页面
     * @param url 跳转页面
     */
    const replace = (url: any) => {
        webview.history.replaceState(null, document.title, url);
        return webview.history.go(0);
    }

    /**
     * 页面跳转
     * 
     * @param path   跳转路径
     * @param options 跳转路径携带参数 
     * @returns 
     */
    const navigate = (path: string, options?: any) => {
        return nav(path, options)
    }

    /**
     *  返回上一页
     */
    const navigateBack = () => {
        return nav(-1);
    }

    /**
     *  刷新页面
     */
    const refresh = () => {
        return nav(0);
    }

    return { replace, navigate, navigateBack, refresh };
}