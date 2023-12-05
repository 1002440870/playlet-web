import { DotLoading } from "antd-mobile"
import styles from "./styles/BbLoading.module.scss";

const BbLoading = () => {
    return (
        <div className={styles.container}>
            <span className={styles.loading_icon}>
                <DotLoading />
            </span>
        </div>
    )
}

export default BbLoading;