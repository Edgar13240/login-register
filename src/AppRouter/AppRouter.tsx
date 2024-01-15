import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthForm from "../component/AuthForm";
import UserProfile from "../component/UserProfile";
import HomePage from "../component/HomePage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<AuthForm isLogin={true} />} />
                <Route path="/register" element={<AuthForm isLogin={false} />} />
                <Route path="/user" element={<UserProfile />} />
            </Routes>
        </Router>
    )
}

export default AppRouter