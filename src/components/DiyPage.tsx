import { Fragment } from "react";
import BbBanner from "./diy/BbBanner";
import BbGird from "./diy/BbGird";
import BbList from "./diy/BbList";

enum DiyPageType {
    Banner = "Banner",
    Gird = "Gird",
    List = "List",
}

const DiyPage = () => {

    const DiyPageList = [
        { type: DiyPageType.Banner },
        { type: DiyPageType.Gird, count: 3 },
        { type: DiyPageType.Gird, count: 6 },
        { type: DiyPageType.List }
    ]

    const switchDiyTemplate = (type: DiyPageType, count: any) => {
        switch (type) {
            case DiyPageType.Banner: return <BbBanner />;
            case DiyPageType.Gird: return <BbGird count={count} />;
            case DiyPageType.List: return <BbList />;
        }
    }

    return (
        <Fragment>
            {DiyPageList.map((item, index) => (
                <Fragment key={index}>
                    {switchDiyTemplate(item.type, item.count)}
                </Fragment>
            ))}
        </Fragment>
    )

}

export default DiyPage;