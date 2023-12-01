import styles from "./styles/BbGird.module.scss";
import { Image } from "antd-mobile";

type BbGirdProps = {
    count: number, // 个数
}

const BbGird = (props: BbGirdProps) => {
    const { count } = props;

    return (
        <div className={styles.container}>
            <div className={styles.top_label}>
                <div className={styles.left}>Editor's Picks</div>
                <div className={styles.right}>
                    <div className={styles.more_text}>more</div>
                    <Image src={require("@/assets/more_icon.png")} className={styles.more_icon} />
                </div>
            </div>
        </div>
    )
}

export default BbGird;