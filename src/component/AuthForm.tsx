import React from 'react';
import { useForm } from 'react-hook-form';
import { loginUser, registerUser } from '../features/reducer/authSlice';
import { RootState} from "../features/store";
import '../index.css';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../hooks/hook";

interface AuthFormProps {
    isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useAppDispatch();
    const error = useAppSelector((state: RootState) => state.auth.error);
    const navigate = useNavigate();

    const validateEmail = (value: string) => {
        const isValidEmail = /\S+@\S+\.\S+/.test(value);
        return isValidEmail || 'Enter a valid email';
    };

    const onSubmit = async (data: any) => {
        if (isLogin) {
            dispatch(loginUser(data));
            // Redirect to the user page and successful login
            navigate('/user');
        } else {
            dispatch(registerUser(data));

            // Simulate login after successful registration
            const registrationSuccess = !error;
            if (registrationSuccess) {
                dispatch(loginUser(data));
                // Redirect to the user page after successful registration and login
                navigate('/user');
            }
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email:
                    <input type="text" {...register('email', { required: 'Email is required', validate: validateEmail })} />
                    {errors.email && <p style={{ color: 'red' }}>email is required</p>}
                </label>
                <label>
                    Password:
                    <input type="password" {...register('password',{required:'password is required'})} />
                    {errors.password && <p style={{ color: 'red' }}>password is required</p>}
                </label>
                {!isLogin && (
                    <label>
                        Username:
                        <input type="text" {...register('username',{required:'username is required'})} />
                        {errors.username && <p style={{ color: 'red' }}>username is required</p>}
                    </label>
                )}
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default AuthForm;

