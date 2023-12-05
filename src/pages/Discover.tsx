import DiyPage from "@/components/DiyPage";
import PageLayout from "@/components/PageLayout";
import { useRouteNavigate } from "@/hooks/useRouteNavigate";
import styles from "@/styles/pages/Discover.module.scss";
import SCREEN from "@/utils/router";
import { Image } from "antd-mobile";


const SearchNav = () => {
    const { navigate } = useRouteNavigate();

    return (
        <div className={styles.search_view}>
            <Image src={require("@/assets/fictop.png")} className={styles.logo} />
            <div className={styles.search_area} onClick={() => navigate(SCREEN.Search)}>
                <Image src={require("@/assets/search.png")} className={styles.search_icon} />
                <div className={styles.text}>Search some video....</div>
            </div>
            <Image
                src={require("@/assets/search_gift.png")}
                className={styles.search_gift}
                onClick={() => navigate(SCREEN.Sign)}
            />
        </div>
    )
}

const Discover = () => {

    return (
        <PageLayout hideHeader>
            <div className={styles.container}>
                <SearchNav />
                <div className={styles.diy_page_view}>
                    <DiyPage />
                </div>
            </div>
        </PageLayout>
    )
}

export default Discover;
