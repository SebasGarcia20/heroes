import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { childrenHeroesRoutes } from "../heroes/routes/childrenHeroesRoutes";
import { PrivateRoute } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = [
  {
    path: "/*",
    element: <PrivateRoute> <HeroesRoutes /> </PrivateRoute>,
    children: childrenHeroesRoutes
  },
  {
    path: '/login',
    element: <PublicRoute> <LoginPage /> </PublicRoute>,
  }
]



