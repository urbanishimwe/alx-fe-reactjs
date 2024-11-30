import './App.css'
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Profile from './components/Profile';
import BlogPost from './components/Blog';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

const Login = () => {
  const useRedirect = useNavigate();
  const handleLogin = () => {
    localStorage.setItem('authToken', 'your-token');
    useRedirect("/");
  };
  return <button onClick={handleLogin}>Login</button>
};

const App = () => {
  return (<>
    <h1> App Home </h1>
    <NavLink to="/profile"> Visit profile </NavLink>
    <Outlet />
  </>)
};

const ProtectedRoutes = () => {
  if (isAuthenticated()) {
    return (
      <Route path="/" element={<App />}>
        <Route path="/blog/:id" element={BlogPost()} />
        <Route path='/profile' element={<Profile />}>
          <Route path="/profile/details" element={ProfileDetails()} />
          <Route path="/profile/settings" element={ProfileSettings()} />
        </Route>
      </Route>
    )
  }
  return <Route path="/" element={<Login/>} />
}

const RouteList = () => {
  return (
    <Routes>
      {ProtectedRoutes()}
    </Routes>
  )
}


export default RouteList;