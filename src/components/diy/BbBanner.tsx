import { Image, Swiper } from "antd-mobile";
import styles from "./styles/BbBanner.module.scss";

const BbBanner = () => {
    const bannerList = [
        "https://source.unsplash.com/random/400x140",
        "https://source.unsplash.com/random/400x140",
        "https://source.unsplash.com/random/400x140",
        "https://source.unsplash.com/random/400x140",
        "https://source.unsplash.com/random/400x140",
    ]

    return (
        <Swiper
            className={styles.swiper_container}
            loop={true}
            autoplay={true}
        >
            {bannerList.map((item, index) => (
                <Swiper.Item key={index} className={styles.swiper_item}>
                    <Image src={item} fit={"contain"} lazy={true} className={styles.swiper_item} />
                </Swiper.Item>
            ))}
        </Swiper>
    )
}

export default BbBanner;