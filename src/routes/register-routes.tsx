import { RouteObject } from "react-router-dom";
import Identification from "../views/components/signup/Identification";
import Credentials from "../views/components/signup/Credentials";

export const registerRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Identification />,
  },
  {
    path: "/credentials",
    element: <Credentials />,
  }
];