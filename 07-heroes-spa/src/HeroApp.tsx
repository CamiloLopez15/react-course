import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";
function HeroApp() {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}

export default HeroApp;
