import { Navigate } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage } from "..";
import { SearchPage } from "../pages/SearchPage";

export const childrenHeroesRoutes = [
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DcPage />,
    },
    {
        path: "search",
        element: <SearchPage />,
    },
    {
        path: "hero/:id",
        element: <HeroPage />,
    },
    {
        path: './*',
        element: <Navigate to={'marvel'} />
    }
]