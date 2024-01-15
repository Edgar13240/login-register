import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
    username: string;
    email: string;
    password: string;
}

interface AuthState {
    user: User | null;
    error: string | null;
    users: User[];
}

const initialState: AuthState = {
    user: null,
    error: null,
    users: [],
};

const authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers: {
            loginUser: (state, action: PayloadAction<{ email: string; password: string }>) => {
                const {email, password} = action.payload;

                const user = state.users.find((u) => u.email === email && u.password === password);

                if (user) {
                    state.user = user;
                    state.error = null;
                } else {
                    state.user = null;
                    state.error = 'Invalid email or password';
                }
            },
            registerUser: (state, action: PayloadAction<User>) => {
                const existingUser = state.users.find((u) => u.email === action.payload.email && u.password === action.payload.password);
                if (existingUser) {
                    state.user = null;
                    state.error = 'Email is already registered or password';
                } else {
                    state.users.push(action.payload);
                    state.user = action.payload;
                    state.error = null;
                }
            },
            logoutUser: (state) => {
                state.user = null;
                state.error = null;
            },
        },
    })
;

export const {loginUser, registerUser, logoutUser} = authSlice.actions;

export default authSlice.reducer;
