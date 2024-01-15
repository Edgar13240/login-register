import React from 'react';
import {Link} from "react-router-dom";
import '../index.css'

const HomePage: React.FC = () => {
    return (
        <div>
            <h2>Welcome to the Home Page!</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/user">User Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
