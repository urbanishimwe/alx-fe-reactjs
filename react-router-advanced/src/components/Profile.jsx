import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
    return (
        <Router>
            <div>
                {/* Route to Dashboard component */}
                <Route path="/profile/details" component={ProfileDetails} />
                <Route path="/profile/settings" component={ProfileSettings} />
                {/* Default route to Home component */}
                <Route path="/">
                    <Link to="/profile/details"> Profile Details </Link> <br/>
                    <Link to="/profile/settings"> Profile Settings </Link>
                </Route>
            </div>
        </Router>
    )
};

export default Profile;