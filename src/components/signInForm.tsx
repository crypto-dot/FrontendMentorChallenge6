
import React, { useState } from 'react'

function signInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
    <div className="signin-container">
        <h1>Sign In</h1>
        <form >
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
    )
}

export default signInForm