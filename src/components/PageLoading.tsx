import { DotLoading } from "antd-mobile";
import styles from "./styles/PageLoading.module.scss"

const PageLoading = () => {
    return (
        <div className={styles.container}>
            <span className={styles.loading_icon}>
                <DotLoading />
            </span>
        </div>
    )
}

export default PageLoading;