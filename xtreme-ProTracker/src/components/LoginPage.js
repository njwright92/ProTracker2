import React, { useState } from "react";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`${isLoggingIn ? "Logging in" : "Registering"} with`);
        console.log(`Username: ${userName}`);
        console.log(`Password: ${password}`);
        // Add authentication logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">Username:</label>
                <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">
                    {isLoggingIn ? "Login" : "Register"}
                </button>
                <button
                    type="button"
                    onClick={() => setIsLoggingIn(!isLoggingIn)}
                >
                    {isLoggingIn ? "Need to Register" : "Need to Login"}
                </button>
            </div>
        </form>
    );
};

export default Login;
