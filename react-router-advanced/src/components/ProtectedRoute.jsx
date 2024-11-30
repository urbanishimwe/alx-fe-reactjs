import BlogPost from "./Blog"
import { ProfileRoutes } from "./Profile";
import { Route, useNavigate, NavLink, Outlet } from "react-router-dom";

export const Header = () => {
    return (<>
        <h1> App Home </h1>
        <NavLink to="/profile"> Visit profile </NavLink>
        <Outlet />
    </>)
};

const Login = () => {
    const useRedirect = useNavigate();
    const handleLogin = () => {
        localStorage.setItem('authToken', 'your-token');
        useRedirect("/");
    };
    return <button onClick={handleLogin}>Login</button>
};

const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = () => {
    if (isAuthenticated()) {
        return (
            <Route path="/" element={<Header />}>
                <Route path="/blog/:id" element={<BlogPost />} />
                {ProfileRoutes()}
            </Route>
        )
    }
    return <Route path="/" element={<Login />} />
}

export default ProtectedRoute;