import {User} from "../types/authTypes.tsx";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ user: User; accessToken: string; refreshToken: string}>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
        }
    }
})

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;