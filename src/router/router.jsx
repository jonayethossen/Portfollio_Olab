import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfollio from "../pages/Portfollio";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/portfolio",
        Component: Portfollio,
      },
    ],
  },
]);
export default router;
