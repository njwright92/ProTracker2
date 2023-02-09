import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

const Login = ({ history }) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Logging in with`);
        console.log(`Username: ${userName}`);
        console.log(`Password: ${password}`);
        // Add authentication logic here
        fakeAuth.authenticate(() => {
            history.push("/admin");
        });
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
            <button type="submit">Login</button>
        </form>
    );
};

const Admin = () => {
    return (
        <Route
            render={({ history }) =>
                fakeAuth.isAuthenticated ? (
                    <div>
                        <h1>Welcome to the Admin Dashboard</h1>
                        <button
                            type="button"
                            onClick={() => {
                                fakeAuth.signout(() => history.push("/"));
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: "/admin" } }} />
                )
            }
        />
    );
};

const App = () => {
    return (
        <div>
            <Route exact path="/" render={() => <h1>Welcome to the app</h1>} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
        </div>
    );
};

export default App;
