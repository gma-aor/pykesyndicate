import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Ranks } from "./pages/Ranks";
import { Families } from "./pages/Families";
import { Events } from "./pages/Events";
import { Services } from "./pages/Services";
import { Spice } from "./pages/Spice";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "ranks", Component: Ranks },
      { path: "spice", Component: Spice },
      { path: "families", Component: Families },
      { path: "events", Component: Events },
      { path: "services", Component: Services },
    ],
  },
]);
