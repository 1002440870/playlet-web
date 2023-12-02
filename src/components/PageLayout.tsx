import { Fragment } from "react";
import styles from "./styles/PageLayout.module.scss";

type PageLayoutProps = {
    children: any, // 子元素
    header?: any, // 自定义头部内容
    loading?: boolean, // 是否加载  
}

const PageLayout = (props: PageLayoutProps) => {
    const { children, loading, header } = props;

    return (
        <div className={styles.container}>
            <Fragment>{children}</Fragment>
        </div>
    )


}

export default PageLayout;