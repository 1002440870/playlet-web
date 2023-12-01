import Discover from "@/pages/Discover";
import Explore from "@/pages/Explore";
import Home from "@/pages/Home";
import Me from "@/pages/Me";
import MyList from "@/pages/MyList";
import { useMemo } from "react";
import { Navigate } from "react-router-dom";

const useScreens = () => {
    const screens = useMemo(() => {
        const routerList: { path: string; element: any; children?: any }[] = [];
        routerList.push({ path: "/*", element: <Navigate to="/" replace /> });
        routerList.push({
            path: "/",
            element: <Home />,
            children: [
                { path: "/", element: <Discover /> },
                { path: "/explore", index: true, element: <Explore /> },
                { path: "/mylist", element: <MyList /> },
                { path: "/me", element: <Me /> },
            ]
        });
        return routerList;
    }, []);

    return { screens };
};

export default useScreens;
