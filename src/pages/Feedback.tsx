import PageLayout from "@/components/PageLayout";
import styles from "@/styles/pages/Feedback.module.scss";
import { ImageUploadItem, ImageUploader, Input, TextArea } from "antd-mobile";

const Feedback = () => {

    return (
        <PageLayout title={"Feedback"}>
            <div className={styles.container}>
                <div className={styles.form_list}>
                    <div className={styles.form_label}>
                        <div className={styles.requird}>*</div>
                        <div className={styles.requird_text}>Email</div>
                    </div>
                    <div className={styles.form_content}>
                        <Input type={"email"} placeholder={"Please your Email"} className={styles.input} />
                    </div>
                </div>
                <div className={styles.form_list}>
                    <div className={styles.form_label}>
                        <div className={styles.requird}>*</div>
                        <div className={styles.requird_text}>Feedback</div>
                    </div>
                    <div className={styles.form_content}>
                        <TextArea placeholder={"Please your Feedback"} className={styles.input_text} />
                    </div>
                </div>
                <div className={styles.form_list}>
                    <div className={styles.form_label}>
                        <div className={styles.requird}>*</div>
                        <div className={styles.requird_text}>Images</div>
                    </div>
                    <div className={styles.form_content}>
                        <ImageUploader
                            value={[]}
                            onChange={(event) => console.log(event)}
                            upload={function (file: File): Promise<ImageUploadItem> {
                                throw new Error("Function not implemented.");
                            }}
                        />
                    </div>
                </div>
                <div className={styles.btn_view}>
                    <div className={styles.btn_view_text}>Submit</div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Feedback;