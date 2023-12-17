import React from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../features/reducer/authSlice'
import {useAppDispatch} from "../hooks/hook";

interface RegisterFormInputs {
    username: string;
    password: string;
}

const RegisterForm: React.FC = () => {
    const { handleSubmit, register: formRegister } = useForm<RegisterFormInputs>();
    const dispatch = useAppDispatch();

    const onSubmit = handleSubmit((data) => {
        dispatch(register({ username: data.username, password: data.password }));
    });

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input {...formRegister('username')} type="text" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input {...formRegister('password')} type="password" id="password" />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
