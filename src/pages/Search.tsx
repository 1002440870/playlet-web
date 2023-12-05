import PageLayout from "@/components/PageLayout"
import { useRouteNavigate } from "@/hooks/useRouteNavigate";
import { Image, NavBar, SearchBar } from "antd-mobile";
import styles from "@/styles/pages/Search.module.scss";
import { useState } from "react";
import BbLoading from "@/components/BbLoading";
import SCREEN from "@/utils/router";

const SearchBarNav = ({ onPropsSearch }: any) => {
    const [searchValue, setSearchValue]: any = useState(undefined);
    const { navigateBack } = useRouteNavigate();

    const onSearch = () => {
        return onPropsSearch && onPropsSearch();
    }

    return (
        <NavBar
            className={styles.navbar}
            backArrow={true}
            onBack={() => navigateBack()}
            right={<span className={styles.searchBtn} onClick={onSearch}>Search</span>}
        >
            <SearchBar
                value={searchValue}
                onChange={(value) => setSearchValue(value)}
                onSearch={onSearch}
                placeholder={"Search..."}
                onlyShowClearWhenFocus
            />
        </NavBar>
    )
}

const SearchHistory = () => {
    const searchHistory = ["search", "ceo", "hot", "historys", "love", "greens", "testings", "greenesss"];

    return (
        <div className={styles.container}>
            <div className={styles.label_view_list}>
                <div className={styles.top_container}>
                    <div className={styles.top_text}>Search History</div>
                    <Image src={require("@/assets/deleted_icon.png")} className={styles.deleted_icon} />
                </div>
                <div className={styles.content_view}>
                    <div className={styles.list_content}>
                        {searchHistory.map((item, index) => (
                            <div key={index} className={styles.tags}>{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.label_view_list}>
                <div className={styles.top_container}>
                    <div className={styles.top_text}>Trending</div>
                </div>
                <div className={styles.content_view}>
                    <div className={styles.list_content}>
                        {searchHistory.map((item, index) => (
                            <div key={index} className={styles.tags}>{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.label_view_list}>
                <div className={styles.top_container}>
                    <div className={styles.top_text}>Most Popular Stories</div>
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
    )
}

const SearchView = ({ loadings, dataList }: any) => {
    const { navigate } = useRouteNavigate();
    const searchHistory = ["search", "ceo", "hot", "historys", "love", "greens", "testings", "greenesss"];

    if (loadings) return <BbLoading />;

    if (dataList && dataList.length > 0) {
        return (
            <div className={styles.list_cards_view}>
                {dataList.map((item: any, index: number) => (
                    <div className={styles.list_cards} key={index} onClick={() => navigate(SCREEN.Details)}>
                        <Image src={require("@/assets/cover.png")} className={styles.cover_left} />
                        <div className={styles.list_cards_right}>
                            <div className={styles.video_name}>Wounded Vows</div>
                            <div className={styles.explain}>
                                Introduction: Mira kills her alpha's brother on her 18th birthday. To make matters worse,
                                the alpha is Mira's mate and he witnesses that. Mira is relegated to
                                be a slave and locked in a dungeon. She's in deep distress. Will a visit from the
                            </div>
                            <div className={styles.tags_view}>
                                {searchHistory.map((item, index) => (
                                    <div className={styles.tags} key={index}>{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return <SearchHistory />;
}

const Search = () => {
    const [dataList, setDataList]: any = useState([]);
    const [loadings, setLoadings] = useState(false);

    const onPropsSearch = async () => {
        setLoadings(true);
        const dataList = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Array.from(Array(30)));
            }, 1200);
        });
        setDataList(dataList);
        setLoadings(false);
    }

    return (
        <PageLayout header={<SearchBarNav onPropsSearch={onPropsSearch} />}>
            <div className={styles.search_view}>
                <SearchView loadings={loadings} dataList={dataList} />
            </div>
        </PageLayout>
    )
}

export default Search;