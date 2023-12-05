import PageLayout from "@/components/PageLayout"
import { useRouteNavigate } from "@/hooks/useRouteNavigate";
import styles from "@/styles/pages/Sign.module.scss";
import { NavBar, Image } from "antd-mobile";
import { ExclamationCircleOutline, LeftOutline } from "antd-mobile-icons";
import classNames from "classnames";

const SignBarNav = () => {
    const { navigateBack } = useRouteNavigate();

    return (
        <NavBar
            className={styles.navbar}
            onBack={() => navigateBack()}
            backArrow={true}
            right={<div className={styles.historys_btn}>historys</div>}
        >
            <span className={styles.title}>Earn Rewards</span>
        </NavBar>
    )
}

const Sign = () => {
    const signConfigs = [
        { amount: 5, icon: require("@/assets/me_coin.png"), count: 1 },
        { amount: 10, icon: require("@/assets/me_coin.png"), count: 1 },
        { amount: 15, icon: require("@/assets/me_coin.png"), count: 1 },
        { amount: 20, icon: require("@/assets/me_coin.png"), count: 1 },
        { amount: 25, icon: require("@/assets/me_coin.png"), count: 1 },
        { amount: 30, icon: require("@/assets/me_coin.png"), count: 1 },
        { amount: 40, icon: require("@/assets/more_money.png"), count: 2 },
    ]

    const rewardTasks = [
        { title: "Enable Notification", amount: 5 },
        { title: "Enable Notification", amount: 10 },
        { title: "Enable Notification", amount: 15 },
        { title: "Enable Notification", amount: 20 },
        { title: "Enable Notification", amount: 30 },
        { title: "Enable Notification", amount: 10 },
        { title: "Enable Notification", amount: 30 },
    ]

    return (
        <PageLayout header={<SignBarNav />}>
            <div className={styles.container}>
                <div className={styles.sign_money_view}>
                    <div className={styles.money_left}>
                        <Image src={require("@/assets/me_coin.png")} className={styles.coins} />
                        <div className={styles.coins_text}>10000</div>
                    </div>
                    <ExclamationCircleOutline className={styles.money_right} />
                </div>
                <div className={styles.sign_view}>
                    <div className={styles.sign_view_top}>Daily Chack-in</div>
                    <div className={styles.sign_view_content}>
                        {signConfigs.map((item, index) => (
                            <div className={classNames(styles.sign_cards, item.count > 1 && styles.sign_more_cards)} key={index}>
                                <div className={styles.top_days}>Day {index + 1}</div>
                                <div className={styles.icon_view}>
                                    <Image src={item.icon} className={styles.icon} />
                                    {item.count > 1 ? <div className={styles.count}>x{item.count}</div> : null}
                                </div>
                                <div className={styles.amount}>+{item.amount} Coins</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.sign_btn}>
                        <div className={styles.sign_btn_text}>Check-in</div>
                    </div>
                    <div className={styles.explain}>Continues check-in for 7 days to earn more coin.</div>
                </div>
                <div className={styles.ad_banner}>
                    <Image src={require("@/assets/ad_banner.png")} />
                </div>
                <div className={styles.dayily_bouns}>
                    <div className={styles.dayily_bouns_top}>Daily Chack-in</div>
                    <div className={styles.dayily_bouns_content}>
                        {rewardTasks.map((item, index) => (
                            <div className={styles.dayily_bouns_cards} key={index}>
                                <div className={styles.cards_left}>
                                    <div className={styles.top}>{item.title}</div>
                                    <div className={styles.bottom}>
                                        <Image src={require("@/assets/me_coin.png")} className={styles.cards_icon} />
                                        <div className={styles.cards_text}>+{item.amount}</div>
                                    </div>
                                </div>
                                <div className={styles.success_btn}>Claim</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Sign;