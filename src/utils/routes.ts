import Layout from "@/components/Layout";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";
import ROUTE_PATHS from "./routePaths";

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.Home,
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: ROUTE_PATHS.About,
        Component: AboutPage,
      },
    ],
  },
]);

export default router;
