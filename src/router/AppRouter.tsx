import useScreens from "@/hooks/useScreens";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import enUS from 'antd-mobile/es/locales/en-US'
import { ConfigProvider } from "antd-mobile";
import vConsole from "vconsole";
import { AliveScope } from 'react-activation';
import styles from "@/styles/App.module.scss";

// new vConsole({ theme: "dark" });

const AppRouter = () => {
    const { screens } = useScreens();
    const stackRouter = createBrowserRouter(screens);

    return (
        <div className={styles.App}>
            <ConfigProvider locale={enUS}>
                <AliveScope>
                    <RouterProvider router={stackRouter} />
                </AliveScope>
            </ConfigProvider>
        </div>
    )

}

export default AppRouter