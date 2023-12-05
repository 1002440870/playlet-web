import PageLayout from "@/components/PageLayout"
import { useState } from "react"
import styles from "@/styles/pages/Language.module.scss";
import { Image } from "antd-mobile";

const Language = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const languageList = [
        { title: "English", value: "en" },
        { title: "中文", value: "zh" },
        { title: "日本語", value: "ja" },
        { title: "한국어", value: "ko" },
        { title: "Русский", value: "ru" },
        { title: "Español", value: "es" },
        { title: "Français", value: "fr" },
        { title: "Deutsch", value: "de" },
        { title: "Italiano", value: "it" },
        { title: "Português", value: "pt" },
        { title: "Türkçe", value: "tr" },
        { title: "Polski", value: "pl" },
        { title: "العربية", value: "ar" },
        { title: "हिन्दी", value: "hi" },
        { title: "বাংলা", value: "bn" },
        { title: "తెలుగు", value: "te" },
        { title: "ગુજરાતી", value: "gu" },
        { title: "ಕನ್ನಡ", value: "kn" },
        { title: "मराठी", value: "mr" },
    ]

    return (
        <PageLayout title={"Language"}>
            <div className={styles.container}>
                {languageList.map((item, index) => (
                    <div className={styles.language_cards} key={index} onClick={() => setActiveIndex(index)}>
                        <div className={styles.left}>{item.title}</div>
                        <div className={styles.right}>
                            {activeIndex === index ? (
                                <Image
                                    src={require("@/assets/select_ed.png")}
                                    className={styles.select_ed}
                                />
                            ) : <div className={styles.select_ed_icon} />}
                        </div>
                    </div>
                ))}
            </div>
        </PageLayout>
    )
}

export default Language;