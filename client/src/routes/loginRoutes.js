import React, { lazy } from "react";
import ForgotPassword from "../containers/Authentication/ForgotPassword";
import Otp from "../containers/Authentication/Otp";
import ResetPassword from "../containers/Authentication/ResetPassword";
import { PublicRoute } from "../hoc/PublicRoute";
const Login = lazy(() => import("../containers/Authentication/Login"));

const loginRoutes = [
  {
    path: "/auth",
    element: <PublicRoute />,
    children: [
      {
        element: <Login />,
        path: "login",
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "otp",
        element: <Otp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
];

export default loginRoutes;
