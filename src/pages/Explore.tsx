import PageLayout from "@/components/PageLayout";
import { VideoPlayer } from '@videojs-player/react'
import 'video.js/dist/video-js.css'
import styles from "@/styles/pages/Explore.module.scss";
import { useRef, useState } from "react";
import { Image } from "antd-mobile";
import SharePopup from "@/components/popup/SharePopup";
import videojs from "video.js";
import classNames from "classnames";
import { useRouteNavigate } from "@/hooks/useRouteNavigate";
import SCREEN from "@/utils/router";
import KeepAlive from "react-activation";


const Explore = () => {
    const { navigate } = useRouteNavigate();
    const videoRef: any = useRef(undefined);
    const [hasLove, setHasLove] = useState(false);
    const [hasStar, setHasStar] = useState(false);
    const shareRef: any = useRef(undefined);
    const [playPercent, setPlayPercent] = useState(0);
    const [hasPaused, setHasPaused] = useState(true);

    const shareVideo = (event: any) => {
        event.stopPropagation();
        return shareRef?.current?.show();
    }

    const onVideoMounted = (event: any) => {
        videoRef.current = event;
    }

    const pauseVideo = () => {
        const player = videojs(videoRef?.current.video);
        setHasPaused(!hasPaused);
        return player.paused() ? player.play() : player.pause();
    }

    const onTimeUpdate = (event: any) => {
        const player = videojs(event.target);
        const duration: any = player.duration();
        const time: any = player.currentTime();
        const percent = (time / duration) * 100;
        setPlayPercent(percent)
    }

    return (
        <PageLayout hideHeader={true}>
            <div className={styles.container}>
                <VideoPlayer
                    className={styles.video_container}
                    src={"https://res.goodreels.com/mts/books/092/31000571092/227602/1f28743419d92cbaa8d9ff01100dc62a.mp4"}
                    controls={false}
                    autoplay={false}
                    loop={false}
                    muted={false}
                    onMounted={(event) => onVideoMounted(event)}
                    volume={0.6}
                    onTimeUpdate={(event: any) => onTimeUpdate(event)}
                />
                <div className={classNames(styles.play_view, !hasPaused && styles.hide_play_view)}>
                    <Image src={require("@/assets/video/play_icon.png")} className={styles.play_icon} />
                </div>
                <div className={styles.video_area} onClick={() => pauseVideo()}>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div className={styles.video_name}>Wounded Vows</div>
                            <div className={styles.video_num}>Episode 1</div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.list_item}>
                                <Image
                                    src={!hasLove ? require("@/assets/video/love.png") : require("@/assets/video/love_ed.png")}
                                    className={styles.icon_item}
                                    onClick={() => setHasLove(!hasLove)}
                                    lazy={true}
                                />
                                <div className={styles.icon_number}>9999</div>
                            </div>
                            <div className={styles.list_item}>
                                <Image
                                    src={!hasStar ? require("@/assets/video/star.png") : require("@/assets/video/star_ed.png")}
                                    className={styles.icon_item}
                                    lazy={true}
                                    onClick={() => setHasStar(!hasStar)}
                                />
                                <div className={styles.icon_number}>9999</div>
                            </div>
                            <div className={styles.list_item} onClick={(event) => shareVideo(event)}>
                                <Image src={require("@/assets/video/share.png")} className={styles.icon_item} />
                                <div className={styles.icon_number}>9999</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.time_line}>
                        <div className={styles.time_current} style={{ width: `${playPercent}%` }}></div>
                    </div>
                    <div className={styles.bottom} onClick={() => navigate(SCREEN.Details)}>
                        <div className={styles.bottom_left}>
                            <Image src={require("@/assets/video/more_video.png")} className={styles.more_video} />
                            <div className={styles.more_video_text}>Total 80 Episodes</div>
                        </div>
                        <Image src={require("@/assets/video/video_more.png")} className={styles.video_more} />
                    </div>
                </div>
            </div>
            <SharePopup ref={shareRef} videoId={"test_video_id"} />
        </PageLayout>
    )
}

export default Explore;