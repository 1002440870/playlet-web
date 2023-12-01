import DiyPage from "@/components/DiyPage";
import PageLayout from "@/components/PageLayout";
import styles from "@/styles/pages/Discover.module.scss";
import { Image } from "antd-mobile";


const SearchNav = () => {
    return (
        <div className={styles.search_view}>
            <Image src={require("@/assets/fictop.png")} className={styles.logo} />
            <div className={styles.search_area}>
                <Image src={require("@/assets/search.png")} className={styles.search_icon} />
                <div className={styles.text}>Search some video....</div>
            </div>
        </div>
    )
}

const Discover = () => {


    return (
        <PageLayout>
            <div className={styles.container}>
                <SearchNav />
                <DiyPage />
            </div>
        </PageLayout>
    )
}

export default Discover;
