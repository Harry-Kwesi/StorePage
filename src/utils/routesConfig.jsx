import React from "react";
import * as ROUTE from "../constants/routes";

import { Home } from "../pages/index";

const routesConfig = [
  { path: ROUTE.HOME, element: <Home /> },
  // { path: "/auth/signup", element: <SignUp /> },
  // { path: "/auth/login", element: <Login /> },
  // { path: "/user/:userName", element: <Profile /> },
  // { path: "/clubs", element: <Clubs /> },
  // { path: "/club/:userName", element: <Profile /> },
  // { path: "/dashboard", element: <Dashboard /> },
  // { path: "/events", element: <Events /> },
  // { path: "/shop", element: <Shop /> },
  // { path: "/trending", element: <Trending /> },
  // { path: "*", element: <Error404 /> },
];

export default routesConfig;
