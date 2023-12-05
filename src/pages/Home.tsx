import TabRoutes from "@/router/TabRoutes";
import { Outlet } from "react-router-dom";
import styles from "@/styles/pages/Home.module.scss";

const Home = () => {
    return (
        <div className={styles.root}>
            <Outlet />
            <TabRoutes />
        </div>
    )
}

export default Home;
