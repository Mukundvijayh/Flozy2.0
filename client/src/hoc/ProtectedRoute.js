import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        // user is not authenticated
        return <Navigate to="/auth/login" />;
    }
    return (
        <PrivateLayout>
            <Outlet />
        </PrivateLayout>
    );
};