import React from "react";
import Home from "../containers/Home";
import { ProtectedRoute } from "../hoc/ProtectedRoute";

const homeRoutes = [
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    }
]

export default homeRoutes
