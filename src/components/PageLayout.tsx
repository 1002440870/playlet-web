import { Fragment } from "react";
import styles from "./styles/PageLayout.module.scss";
import Navigation from "./Navigation";

type PageLayoutProps = {
    children: any, // 子元素
    header?: any, // 自定义头部内容
    loading?: boolean, // 是否加载  
    hideHeader?: boolean, // 隐藏头部
    title?: string, // 标题头
}

const PageHeader = ({ hideHeader, header, title }: any) => {
    if (hideHeader) return <Fragment />
    if (!header) return <Navigation title={title} />;
    return header;
}

const PageLayout = (props: PageLayoutProps) => {
    const { children, loading, header, hideHeader, title } = props;

    return (
        <div className={styles.container}>
            <PageHeader
                hideHeader={hideHeader}
                header={header}
                title={title}
            />
            <Fragment>{children}</Fragment>
        </div>
    )


}

export default PageLayout;