import { TabBar } from "antd-mobile";
import { useLocation } from "react-router-dom";
import { useRouteNavigate } from "@/hooks/useRouteNavigate";
import BbTabIcon from "@/components/BbTabIcon";
import classNames from "classnames";
import styles from "@/styles/TabRoutes.module.scss";
import { useState } from "react";
import { useUpdateEffect } from "ahooks";
import KeepAlive from "react-activation";

const TabRoutes = () => {
    const { pathname } = useLocation();
    const { navigate } = useRouteNavigate();
    const homeTabs: any = [
        {
            key: '/',
            title: "Home",
            icon: (active: Boolean) => <BbTabIcon.Discover className={classNames(styles.tabIcon, { [styles.active]: active })} />,
            tabStyle: styles.footer_white,
        },
        {
            key: '/explore',
            title: "Explore",
            icon: (active: Boolean) => <BbTabIcon.Library className={classNames(styles.tabIcon, { [styles.active]: active })} />,
            tabStyle: styles.footer_black,
        },
        {
            key: '/mylist',
            title: "My List",
            icon: (active: Boolean) => <BbTabIcon.Bonus className={classNames(styles.tabIcon, { [styles.active]: active })} />,
            tabStyle: styles.footer_white,
        },
        {
            key: '/me',
            title: "Profile",
            icon: (active: Boolean) => <BbTabIcon.Me className={classNames(styles.tabIcon, { [styles.active]: active })} />,
            tabStyle: styles.footer_white,
        },
    ];

    const [tabBarIndex, setTabBarIndex] = useState(0);

    useUpdateEffect(() => {
        const index = homeTabs.findIndex((item: any) => item.key === pathname);
        setTabBarIndex(index);
    }, [pathname]);

    return (
        <KeepAlive name={"tabber_container"} key={"tabber_container"} cacheKey={"tabber_container"}>
            <div className={classNames(styles.footer, homeTabs[tabBarIndex].tabStyle)}>
                <TabBar activeKey={pathname} onChange={(value) => navigate(value)} className={styles.tabBar}>
                    {homeTabs.map((item: any) => <TabBar.Item {...item} />)}
                </TabBar>
            </div>
        </KeepAlive>
    )
}

export default TabRoutes;