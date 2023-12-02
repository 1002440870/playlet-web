import { Image } from "antd-mobile";
import styles from "./styles/SharePopup.module.scss";
import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import BbPopup from "../BbPopup";
import classNames from "classnames";

type SharePopupProps = {
    videoId: any, // 视频ID
}

type SharePopupRef = {
    show: () => void
}

const SharePopup = forwardRef((props: SharePopupProps, ref: Ref<SharePopupRef>) => {
    const { videoId } = props;
    const [visible, setVisible] = useState(false);

    const shareMethodList = [
        { title: "Facebook", icon: require("@/assets/popup/share/facebook.png"), className: styles.facebook },
        { title: "Whatsapp", icon: require("@/assets/popup/share/whatsapp.png"), className: styles.whatsapp },
        { title: "Messenger", icon: require("@/assets/popup/share/messenger.png"), className: styles.messenger },
        { title: "SMS", icon: require("@/assets/popup/share/sms.png"), className: styles.sms, bg: styles.smsBg },
        { title: "Others", icon: require("@/assets/popup/share/other.png"), className: styles.other, bg: styles.otherBg },
    ]

    const show = () => setVisible(true);

    useImperativeHandle(ref, () => ({ show }))

    return (
        <BbPopup visible={visible} setVisible={setVisible} closeOnMaskClick={true} position={"bottom"}>
            <div className={styles.container}>
                <div className={styles.top_view}>
                    <div className={styles.top_border}></div>
                    <div className={styles.top_title}>Share to</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.copy_text}>
                        This video can accompany you through long lonely
                        nights im1 !! https://www.flextv.cc/video?series_id=122&series..
                    </div>
                    <div className={styles.copy_btn}>
                        <Image src={require("@/assets/popup/share/copy.png")} className={styles.copy_icon} />
                        <div className={styles.copy_btn_text}>Copy</div>
                    </div>
                </div>
                <div className={styles.share_method_view}>
                    {shareMethodList.map((item, index) => (
                        <div key={index} className={classNames(styles.share_icon_item)}>
                            <div className={item.bg}>
                                <Image src={item.icon} className={item.className} />
                            </div>
                            <div className={styles.share_text}>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </BbPopup>
    )
});

export default SharePopup;