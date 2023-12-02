import styles from "./styles/BbList.module.scss";
import { Image } from "antd-mobile";

const BbList = () => {

    return (
        <div className={styles.container}>
            <div className={styles.top_label}>
                <div className={styles.left}>You Might Like</div>
            </div>
            <div className={styles.walf_view}>
                {Array.from(Array(20)).map((item, index) => (
                    <div key={index} className={styles.walf_card}>
                        <Image src={require("@/assets/cover.png")} className={styles.walf_images} />
                        <div className={styles.walf_text}>The Conliacl my galher made made mademademademademademademade</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BbList;