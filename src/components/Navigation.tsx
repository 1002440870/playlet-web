import { NavBar } from "antd-mobile";
import styles from "./styles/Navigation.module.scss";
import { useRouteNavigate } from "@/hooks/useRouteNavigate";

type NavigationProps = {
    title?: string, // 标题栏目
}

const Navigation = (props: NavigationProps) => {
    const { title } = props;
    const { navigateBack } = useRouteNavigate();

    return (
        <NavBar className={styles.navbar} backArrow={true} onBack={() => navigateBack()}>
            <span className={styles.title}>{title}</span>
        </NavBar>
    )
}

export default Navigation;