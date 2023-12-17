import React from "react";
import {BrowserRouter as Router, Outlet, Route, Routes} from "react-router-dom";
import PrivateRoute from "../route/PrivateRoute";
import Home from "../component/Home";
import LoginForm from "../component/LoginForm";
import RegisterForm from "../component/RegisterForm";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Outlet />}>
                    <PrivateRoute path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter