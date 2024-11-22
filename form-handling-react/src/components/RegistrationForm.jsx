import { useState } from 'react';

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;