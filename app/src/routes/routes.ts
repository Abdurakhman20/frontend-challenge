import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";

import { HOME_ROUTE, FAVORITES_ROUTE } from "../consts";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: FAVORITES_ROUTE,
    Component: Favorites,
  },
];
