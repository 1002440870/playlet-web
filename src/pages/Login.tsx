import BbIcon from "@/components/BbIcon";
import PageLayout from "@/components/PageLayout"
import { useRouteNavigate } from "@/hooks/useRouteNavigate";
import styles from "@/styles/pages/Login.module.scss";
import { NavBar, Image } from "antd-mobile";
import classNames from "classnames";

const Login = () => {
    const { navigateBack } = useRouteNavigate();
    const LoginMethodList = [
        {
            icon: <BbIcon.Google />,
            title: "Google",
            className: styles.google_styles,
            iconStyles: styles.google_styles_icon
        },
        {
            icon: <BbIcon.Facebook />,
            title: "Facebook",
            className: styles.facebook_styles,
            iconStyles: styles.facebook_styles_icon
        },
        {
            icon: <BbIcon.Apple />,
            title: "Apple",
            className: styles.apple_styles,
            iconStyles: styles.apple_styles_icon
        },
    ]

    return (
        <PageLayout
            header={
                <NavBar
                    className={styles.navbar}
                    backArrow={true}
                    onBack={() => navigateBack()}
                />
            }
        >
            <div className={styles.container}>
                <div className={styles.login_box}>
                    <Image src={require("@/assets/fictop.png")} className={styles.logo_icon} />
                    <div className={styles.explain}>WeClome to FlexTv</div>
                </div>
                <div className={styles.login_method_list}>
                    {LoginMethodList.map((item, index) => (
                        <div className={classNames(styles.login_btn, item.className)} key={index}>
                            <span className={classNames(styles.loginButtonIcon, item.iconStyles)}>
                                {item.icon}
                            </span>
                            <div className={classNames(styles.login_text, index > 1 && styles.apple_text)}>
                                Sign in with {item.title}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.agreement_view}>
                    <div className={styles.label_text}>
                        <div className={styles.text}>By continuing ,you agree to </div>
                        <div className={styles.text2}>Terms of Service</div>
                    </div>
                    <div className={styles.label_text}>
                        <div className={styles.text}>and confirm that you have read</div>
                        <div className={styles.text2}>Privacy Policy</div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Login;