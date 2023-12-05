import { useRouteNavigate } from "@/hooks/useRouteNavigate";
import styles from "./styles/BbGird.module.scss";
import { Image } from "antd-mobile";
import SCREEN from "@/utils/router";

type BbGirdProps = {
    count: number, // 个数
}

const BbGird = (props: BbGirdProps) => {
    const { count } = props;
    const { navigate } = useRouteNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.top_label} onClick={() => navigate(SCREEN.Classify, { state: { title: "Editor's Picks" } })}>
                <div className={styles.left}>Editor's Picks</div>
                <div className={styles.right}>
                    <div className={styles.text}>More</div>
                    <Image src={require("@/assets/more.png")} className={styles.more_icon} />
                </div>
            </div>
            <div className={styles.gird_view}>
                {Array.from(Array(count)).map((item, index) => (
                    <div key={index} className={styles.gird_card}>
                        <Image src={require("@/assets/cover.png")} className={styles.gird_images} />
                        <div className={styles.grid_text}>The Conliacl my galher made made mademademademademademademade</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BbGird;