import { NavLink, Outlet } from 'react-router-dom'

const Profile = () => (
    <>
        <h1> Profile main page </h1>
        <NavLink to="/profile/details"> Profile Details </NavLink> <br />
        <NavLink to="/profile/settings"> Profile Settings </NavLink>
        <Outlet />
    </>
)

export default Profile;