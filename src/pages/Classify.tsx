import PageLayout from "@/components/PageLayout";
import { useLocation } from "react-router-dom";
import styles from "@/styles/pages/Classify.module.scss";
import BbList from "@/components/diy/BbList";

const Classify = () => {
    const { state: { title } } = useLocation() ?? {};

    return (
        <PageLayout title={title}>
            <div className={styles.container}>
                <BbList hasLabel={false} />
            </div>
        </PageLayout>
    )
}

export default Classify;