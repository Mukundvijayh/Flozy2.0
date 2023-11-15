import { Outlet } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

export const PublicRoute = ({ children }) => {
    return (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    );
};