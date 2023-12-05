import PageLayout from "@/components/PageLayout"
import styles from "@/styles/pages/Pay.module.scss";
import { useState } from "react";
import { Image } from "antd-mobile";
import classNames from "classnames";

const CoinsConfigs = ({ selectIndex, configs, setSelectIndex }: any) => {

    return (
        <div className={styles.coins_configs}>
            <div className={styles.configs_text}>Coins</div>
            <div className={styles.config_list}>
                {configs.map((item: any, index: number) => (
                    <div
                        className={classNames(styles.config_cards, selectIndex === index && styles.active_index)}
                        key={index}
                        onClick={() => setSelectIndex(index)}
                    >
                        <div className={styles.money_info}>
                            <Image src={require("@/assets/me_coin.png")} className={styles.me_coin} />
                            <div className={styles.amount}>{item.amount}</div>
                        </div>
                        <div className={styles.free_bonus}>+{item.freeBonus} Bonus</div>
                        <div className={styles.exp}>+{item.exp}%</div>
                        {selectIndex === index && <Image src={require("@/assets/select_ed.png")} className={styles.select_ed} />}
                    </div>
                ))}
            </div>
        </div>
    )
}


const Pay = () => {
    const [selectIndex, setSelectIndex] = useState(0);
    const configs = [
        { amount: 500, freeBonus: 40, exp: 5, price: 9.99 },
        { amount: 1000, freeBonus: 100, exp: 10, price: 10.99 },
        { amount: 1500, freeBonus: 225, exp: 15, price: 15.99 },
        { amount: 2000, freeBonus: 400, exp: 20, price: 20.99 },
        { amount: 3000, freeBonus: 750, exp: 25, price: 25.99 },
        { amount: 5000, freeBonus: 1500, exp: 30, price: 30.99 },
        { amount: 10000, freeBonus: 2000, exp: 40, price: 50.99 },
    ]

    return (
        <PageLayout title={"Purchase"}>
            <div className={styles.container}>
                <CoinsConfigs
                    selectIndex={selectIndex}
                    configs={configs}
                    setSelectIndex={setSelectIndex}
                />
                <div className={styles.pay_list_view}>
                    <div className={styles.top_view}>Payment Methods</div>
                    <div className={styles.google_pay_view}>
                        <div className={styles.pay_method_left}>
                            <Image src={require("@/assets/google_pay.png")} className={styles.google_pay_icon} />
                            <div className={styles.google_pay_text}>Google Pay</div>
                        </div>
                        <Image src={require("@/assets/select_ed.png")} className={styles.select_ed} />
                    </div>
                </div>
                <div className={styles.pay_list_view}>
                    <div className={styles.top_view}>Reminder</div>
                    <div className={styles.pay_list_content}>
                        <p>1. Coins could only be used on this App. </p>
                        <p>2. Payment done but receive nothing? Please <span>click here to refresh</span>,
                            or <span>click to contact us</span>. You can also reach us at support@fittop.com
                        </p>
                    </div>
                </div>
                <div className={styles.pay_list_view}>
                    <div className={styles.top_view}>Subscription Agreement</div>
                    <div className={styles.pay_list_two_content}>
                        <p><span>Payment:</span> The purchase will be charged to your Google Play account.</p>
                        <p>
                            <span>Renewal:</span>
                            Your subscription will renew automatically. Subscriptions are automatically charged
                            each billing period, whether monthly or another period, and you may be charged no more
                            than 24 hours before the beginning of each billing period until you cancel your subscription.
                        </p>
                        <p><span>Cancellation:</span>
                            You may cancel a subscription at any time more than 24 hours before your renewal date.</p>
                        <p><span>Manage your subscriptions:</span>
                            You can view, change, or cancel your subscriptions.</p>
                    </div>
                </div>
            </div>
            <div className={styles.foot_view}>
                <div className={styles.foot_left}>
                    <div className={styles.money_view}>
                        <span className={styles.symle}>$</span>
                        <span className={styles.amount}>{configs[selectIndex].price}</span>
                    </div>
                    <div className={styles.total}>Total: {configs[selectIndex].amount + configs[selectIndex].freeBonus} Bouns</div>
                </div>
                <div className={styles.pay_btn}>
                    <div className={styles.pay_btn_text}>Purchase</div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Pay;