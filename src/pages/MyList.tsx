import PageLayout from "@/components/PageLayout";
import styles from "@/styles/pages/MyList.module.scss";
import { Swiper, SwiperRef, Tabs, Image } from "antd-mobile";
import { AppstoreOutline } from "antd-mobile-icons";
import { useRef, useState } from "react";

const MyListTopNav = ({ activeIndex, setActiveIndex, swiperRef }: any) => {
    const tabItems = [
        { key: 'FollowList', title: 'Follow List' },
        { key: 'PlayList', title: 'Play List' },
    ]

    const onChangeTabs = (key: any) => {
        const index = tabItems.findIndex(item => item.key === key)
        setActiveIndex(index)
        return swiperRef.current?.swipeTo(index)
    }

    return (
        <div className={styles.top_navbar}>
            <Tabs
                activeLineMode={"fixed"}
                className={styles.tabs_view}
                activeKey={tabItems[activeIndex].key}
                onChange={key => onChangeTabs(key)}
            >
                {tabItems.map(item => (
                    <Tabs.Tab
                        title={item.title}
                        key={item.key}
                    />
                ))}
            </Tabs>
            {activeIndex === 1 && <AppstoreOutline className={styles.menu_icon} />}
        </div>
    )
}

const MyListCards = () => {
    return (
        <div className={styles.cards}>
            <Image src={require("@/assets/cover.png")} className={styles.cover_images} />
            <div className={styles.cards_right}>
                <div className={styles.title_cards}>Legend of Thalia: A Luna's</div>
                <div className={styles.cards_right_left}>
                    <div className={styles.number}>EP.1 / EP.80</div>
                    <Image src={require("@/assets/star.png")} className={styles.star_icon} />
                </div>
                <div className={styles.share_btn}>
                    <Image src={require("@/assets/share_red.png")} className={styles.share_icon} />
                    <div className={styles.share_text}>Share</div>
                </div>
            </div>
        </div>
    )
}

const MyList = () => {

    const swiperRef = useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <PageLayout hideHeader={true}>
            <div className={styles.container}>
                <MyListTopNav
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    swiperRef={swiperRef}
                />
                <Swiper
                    direction='horizontal'
                    indicator={() => null}
                    ref={swiperRef}
                    defaultIndex={activeIndex}
                    onIndexChange={index => setActiveIndex(index)}
                >
                    <Swiper.Item>
                        <div className={styles.content}>
                            <div className={styles.play_List_cards}>
                                {Array.from(Array(2)).map((item, index) => <MyListCards key={index} />)}
                            </div>
                            <div className={styles.label_view_list}>
                                <div className={styles.top_container}>
                                    <div className={styles.top_text}>You May Like</div>
                                </div>
                                <div className={styles.content_view}>
                                    <div className={styles.grid_content}>
                                        {Array.from(Array(6)).map((item, index) => (
                                            <div className={styles.video_cards} key={index}>
                                                <Image src={require("@/assets/cover.png")} className={styles.cover} />
                                                <div className={styles.cover_text}>The Rejected Mate</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Swiper.Item>
                    <Swiper.Item>
                        <div className={styles.content}>
                            <div className={styles.play_List_cards}>
                                {Array.from(Array(10)).map((item, index) => <MyListCards key={index} />)}
                            </div>
                        </div>
                    </Swiper.Item>
                </Swiper>
            </div>
        </PageLayout>
    )
}

export default MyList;
