import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        login: (
            state,
            {
                payload,
            }: PayloadAction<Omit<AuthState, "status" | "errorMessage">>
        ) => {
            state.status = UserStatus.authenticated;
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.errorMessage = initialState.errorMessage;
            state.photoURL = payload.photoURL;
        },
        logout: (state, { payload }: PayloadAction<string | null>) => {
            state.status = initialState.status;
            state.displayName = initialState.displayName;
            state.email = initialState.email;
            state.errorMessage = payload;
            state.photoURL = initialState.photoURL;
        },
        checkingCredentials: (state) => {
            state.status = UserStatus.checking;
        },
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;
