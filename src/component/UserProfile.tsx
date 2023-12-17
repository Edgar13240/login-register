import React from 'react';
import { RootState } from '../features/store';
import {useAppSelector} from "../hooks/hook";

const UserProfile: React.FC = () => {
    const user = useAppSelector((state: RootState) => state.auth.user);

    return (
        <div>
            {user ? (
                <>
                    <h2>Welcome, {user.username}!</h2>
                    {/* Add additional user information as needed */}
                </>
            ) : (
                <p>Not logged in</p>
            )}
        </div>
    );
};

export default UserProfile;
