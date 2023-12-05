import PageLayout from "@/components/PageLayout";
import styles from "@/styles/pages/Settings.module.scss";
import { Image, Switch } from "antd-mobile";

const Setting = () => {
    const SettingsMenu = [
        { title: "Disable AutoPlay on 4G/5G" },
        { title: "Clear cache" },
        { title: "Rate Us" },
        { title: "Release Code", exp: "v1.0.0" },
        { title: "Terms of Service" },
        { title: "Privacy Policy" },
    ]

    return (
        <PageLayout title={"Settings"}>
            <div className={styles.container}>
                {SettingsMenu.map((item, index) => (
                    <div className={styles.settings_cards} key={index}>
                        <div className={styles.left}>{item.title}</div>
                        <div className={styles.right}>
                            {item.exp && <div className={styles.exp}>{item.exp}</div>}
                            {index === 0 ? <Switch className={styles.switch_icon} /> :
                                <Image className={styles.more_icon} src={require("@/assets/more.png")} />}
                        </div>
                    </div>
                ))}
                <div className={styles.copy_view}>
                    <div className={styles.text}>Copyright ©2022 PlatApp</div>
                    <div className={styles.text}>All Rights Reserved</div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Setting;