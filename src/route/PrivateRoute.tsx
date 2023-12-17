import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { RootState } from '../features/store';
import {useAppSelector} from "../hooks/hook";

interface PrivateRouteProps {
    path: string;
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
    const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated);

    return isAuthenticated ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};
export default PrivateRoute;
