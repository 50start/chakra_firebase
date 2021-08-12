import { Home } from "../components/pages/Home";
import { Job } from "../components/pages/Job";
import { Programming } from "../components/pages/Programming";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/programming",
    exact: false,
    children: <Programming />,
  },
  {
    path: "/job",
    exact: false,
    children: <Job />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
