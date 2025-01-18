export enum UserStatus {
    checking = "checking",
    notAuthenticated = "not-authenticated",
    authenticated = "authenticated",
}

export interface AuthState {
    status: UserStatus;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMessage: string | null;
}
