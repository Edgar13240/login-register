import React from 'react';
import { RootState } from '../features/store';
import '../index.css'
import {logoutUser} from '../features/reducer/authSlice'
import { useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../hooks/hook";

const UserProfile: React.FC = () => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        // Redirect to the login page after logout
        navigate('/login'); // Use useNavigate to navigate
    };

    if (!user) {
        navigate('/login'); // Redirect to login if user is not authenticated
        return null;
    }


    return (
        <div className="container">
            <h1>User page</h1>
            <h2>Welcome, {user.username}!</h2>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserProfile
