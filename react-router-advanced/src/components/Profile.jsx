import { Route, NavLink, Outlet } from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => (
    <>
        <h1> Profile main page </h1>
        <NavLink to="/profile/details"> Profile Details </NavLink> <br />
        <NavLink to="/profile/settings"> Profile Settings </NavLink>
        <Outlet />
    </>
)

export const ProfileRoutes = () => (
    <Route path='/profile' element={<Profile />}>
        <Route path="/profile/details" element={ProfileDetails()} />
        <Route path="/profile/settings" element={ProfileSettings()} />
    </Route>
)

export default Profile;