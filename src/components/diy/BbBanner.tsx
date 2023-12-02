import { Image, Swiper } from "antd-mobile";
import styles from "./styles/BbBanner.module.scss";

const BbBanner = () => {
    const bannerList = [
        require("@/assets/banner.png"),
        require("@/assets/banner.png"),
        require("@/assets/banner.png"),
        require("@/assets/banner.png"),
    ]

    return (
        <Swiper
            className={styles.swiper_container}
            loop={true}
            autoplay={true}
        >
            {bannerList.map((item, index) => (
                <Swiper.Item key={index} className={styles.swiper_item}>
                    <Image src={item} lazy={true} className={styles.swiper_item} />
                </Swiper.Item>
            ))}
        </Swiper>
    )
}

export default BbBanner;