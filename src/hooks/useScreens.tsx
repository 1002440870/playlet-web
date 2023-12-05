import SCREEN from "@/utils/router";
import { lazy, useMemo } from "react";
import { Navigate } from "react-router-dom";

const Classify = lazy(() => import("@/pages/Classify"));
const Details = lazy(() => import("@/pages/Details"));
const MyList = lazy(() => import("@/pages/MyList"));
const Search = lazy(() => import("@/pages/Search"));
const Setting = lazy(() => import("@/pages/Setting"));
const Sign = lazy(() => import("@/pages/Sign"));
const Feedback = lazy(() => import("@/pages/Feedback"));
const Home = lazy(() => import("@/pages/Home"));
const Discover = lazy(() => import("@/pages/Discover"));
const Explore = lazy(() => import("@/pages/Explore"));
const Me = lazy(() => import("@/pages/Me"));
const Login = lazy(() => import("@/pages/Login"));
const Pay = lazy(() => import("@/pages/Pay"));
const Language = lazy(() => import("@/pages/Language"));

const useScreens = () => {
    const screens = useMemo(() => {
        const routerList: { path: string; element: any; children?: any }[] = [];
        routerList.push({ path: SCREEN.Default, element: <Navigate to="/" replace /> });
        routerList.push({ path: SCREEN.Classify, element: <Classify /> });
        routerList.push({ path: SCREEN.Search, element: <Search /> });
        routerList.push({ path: SCREEN.Sign, element: <Sign /> });
        routerList.push({ path: SCREEN.Feedback, element: <Feedback /> });
        routerList.push({ path: SCREEN.Setting, element: <Setting /> });
        routerList.push({ path: SCREEN.Setting, element: <Setting /> });
        routerList.push({ path: SCREEN.Details, element: <Details /> });
        routerList.push({ path: SCREEN.Login, element: <Login /> });
        routerList.push({ path: SCREEN.Pay, element: <Pay /> });
        routerList.push({ path: SCREEN.Language, element: <Language /> });
        routerList.push({
            path: "/",
            element: <Home />,
            children: [
                { path: SCREEN.Discover, element: <Discover /> },
                { path: SCREEN.Explore, index: true, element: <Explore /> },
                { path: SCREEN.MyList, element: <MyList /> },
                { path: SCREEN.Me, element: <Me /> },
            ]
        });
        return routerList;
    }, []);

    return { screens };
};

export default useScreens;
