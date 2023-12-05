import useScreens from "@/hooks/useScreens";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import enUS from 'antd-mobile/es/locales/en-US'
import zhHK from 'antd-mobile/es/locales/zh-HK'
import { ConfigProvider } from "antd-mobile";
import vConsole from "vconsole";
import { AliveScope } from 'react-activation';
import styles from "@/styles/App.module.scss";
import { Suspense } from "react";
import PageLoading from "@/components/PageLoading";

new vConsole({ theme: "dark" });

const AppRouter = () => {
    const { screens } = useScreens();
    const stackRouter = createBrowserRouter(screens);

    return (
        <div className={styles.App}>
            <ConfigProvider locale={zhHK}>
                <AliveScope>
                    <Suspense fallback={<PageLoading />}>
                        <RouterProvider router={stackRouter} />
                    </Suspense>
                </AliveScope>
            </ConfigProvider>
        </div>
    )

}

export default AppRouter