import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from './reducer/authSlice'

const rooReducer = combineReducers({
    auth: authSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rooReducer
    });
}

export type RootState = ReturnType<typeof rooReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

