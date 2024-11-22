import { useState } from 'react';

const ControlledForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        var errors = [];
        if (!username) {
            errors.push("username is required")
        }
        if (!email) {
            errors.push("email is required")
        }
        if (!password) {
            errors.push("password is required")
        }
        setErrors(errors)
        console.log(username, email, password);
    };

    const setErrors = (errors) => {
        document.getElementById("errors").innerHTML = errors.join("<br/>")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p id="errors"> </p>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;