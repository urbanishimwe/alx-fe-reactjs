import './App.css'
import { Route, Navigate as Redirect, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Profile from './components/Profile';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem('authToken', 'your-token');
    window.location.href = '/profile';
  };

  return <button onClick={handleLogin}>Login</button>;
};

// // Custom Route component that checks for authentication
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         // If authenticated, render the component
//         <Component {...props} />
//       ) : (
//         // If not authenticated, redirect to the login page
//         <Redirect to="/login" />
//       )
//     }
//   />
// );

export const Router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route path='/'
      component={() => isAuthenticated() ? (<Profile />) : (<Redirect to="/login" />)}
    />
    <Route path="/login" component={Login} />
  </Route>
));

const App = () => (
  <Router />
);


export default App;