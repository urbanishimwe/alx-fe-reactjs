import './App.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// Function that checks if the user is authenticated
const isAuthenticated = () => {
    // Replace with your authentication logic, for instance checking if a token exists in local storage
    return localStorage.getItem('authToken') !== null;
};

// Custom Route component that checks for authentication
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                // If authenticated, render the component
                <Component {...props} />
            ) : (
                // If not authenticated, redirect to the login page
                <Redirect to="/login" />
            )
        }
    />
);

const App = () => (
    <Router>
        <div>
            <Switch>
                {/* Public route to Login component */}
                <Route path="/login" component={Login} />
                {/* Protected route to Dashboard component */}
                <PrivateRoute path="/profile" component={Profile} />
                {/* Default route to Home component */}
                <Route path="/">
                    <h2>Home</h2>
                    <Link to="/login"> Login </Link>
                </Route>
            </Switch>
        </div>
    </Router>
);

// Simple Login component
const Login = () => {
    const handleLogin = () => {
        // Logic to handle login, e.g., setting authentication token in local storage
        localStorage.setItem('authToken', 'your-token');
        window.location.href = '/profile'; // Redirect to the dashboard after login
    };

    return <button onClick={handleLogin}>Login</button>;
};


export default App;