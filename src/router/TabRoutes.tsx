import { TabBar } from "antd-mobile";
import { useLocation } from "react-router-dom";
import { useRouteNavigate } from "@/hooks/useRouteNavigate";
import BbTabIcon from "@/components/BbTabIcon";
import classNames from "classnames";
import styles from "@/styles/TabRoutes.module.scss";

const TabRoutes = () => {
    const { pathname } = useLocation();
    const { navigate } = useRouteNavigate();

    const homeTabs: any = [
        {
            key: '/',
            title: "Home",
            icon: (active: Boolean) => <BbTabIcon.Discover className={classNames(styles.tabIcon, { [styles.active]: active })} />,
        },
        {
            key: '/explore',
            title: "Explore",
            icon: (active: Boolean) => <BbTabIcon.Library className={classNames(styles.tabIcon, { [styles.active]: active })} />,
        },
        {
            key: '/mylist',
            title: "My List",
            icon: (active: Boolean) => <BbTabIcon.Bonus className={classNames(styles.tabIcon, { [styles.active]: active })} />,

        },
        {
            key: '/me',
            title: "Profile",
            icon: (active: Boolean) => <BbTabIcon.Me className={classNames(styles.tabIcon, { [styles.active]: active })} />,
        },
    ];

    return (
        <TabBar activeKey={pathname} onChange={value => navigate(value)} className={styles.tabBar}>
            {homeTabs.map((item: any) => <TabBar.Item {...item} />)}
        </TabBar>
    )
}

export default TabRoutes;