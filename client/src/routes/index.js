import { createHashRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import homeRoutes from "./homeRoutes";
import loginRoutes from "./loginRoutes";

/**
 * Main Routes for the Application
 */
const router = createHashRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [...loginRoutes, ...homeRoutes],
  },
]);

export default router;
