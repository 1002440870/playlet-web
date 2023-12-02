import PageLayout from "@/components/PageLayout";
import styles from "@/styles/pages/Me.module.scss";
import { Image } from "antd-mobile";

const MemberInfo = () => {
    return (
        <div className={styles.user_view}>
            <div className={styles.user_left}>
                <Image src={require("@/assets/defalut_user.png")} className={styles.user_icon} />
                <div className={styles.user_info}>
                    <div className={styles.nickname}>Guest</div>
                    <div className={styles.member_id}>UID: 000000</div>
                </div>
            </div>
            <div className={styles.sign_btn}>
                <div className={styles.sign_text}>Sign in</div>
            </div>
        </div>
    )
}

const RechangeCard = () => {
    return (
        <div className={styles.rechange_view}>
            <div className={styles.top_label}>
                <div className={styles.top_left}>My Wallet</div>
                <div className={styles.top_right}>
                    <div className={styles.more_text}>Detail</div>
                    <Image className={styles.more_icon} src={require("@/assets/more.png")} />
                </div>
            </div>
            <div className={styles.money_view}>
                <div className={styles.money_left}>
                    <Image src={require("@/assets/me_coin.png")} className={styles.me_coin} />
                    <div className={styles.money}>10000</div>
                </div>
                <div className={styles.rechange_btn}>
                    <div className={styles.rechange_text}>Refill</div>
                </div>
            </div>
        </div>
    )
}

const MenuList = () => {
    const menuList = [
        { title: "Earn Rewards", icon: require("@/assets/gift.png"), className: styles.gift },
        { title: "My List", icon: require("@/assets/mylist.png"), className: styles.mylist },
        { title: "Feedback", icon: require("@/assets/question.png"), className: styles.question },
        { title: "Language", icon: require("@/assets/language.png"), className: styles.language },
        { title: "Setting", icon: require("@/assets/setting.png"), className: styles.setting },
    ]

    return (
        <div className={styles.menu_list}>
            {menuList.map((item, index) => (
                <div className={styles.menu_card} key={index}>
                    <div className={styles.menu_card_left}>
                        <Image src={item.icon} className={item.className} />
                        <div className={styles.menu_text}>{item.title}</div>
                    </div>
                    <Image className={styles.more_icon} src={require("@/assets/more.png")} />
                </div>
            ))}
        </div>
    )
}

const Me = () => {
    return (
        <PageLayout>
            <div className={styles.container}>
                <MemberInfo />
                <RechangeCard />
                <MenuList />
            </div>
        </PageLayout>
    )
}

export default Me;