import { createSlice } from "@reduxjs/toolkit";

import { AuthState, UserStatus } from "../../../auth/types/state";

const initialState: AuthState = {
    displayName: null,
    email: null,
    errorMessage: null,
    photoURL: null,
    status: UserStatus.notAuthenticated,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {},
        logout: (state, action) => {},
        checkingCredentials: (state) => {
            state.status = UserStatus.checking;
        },
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;
