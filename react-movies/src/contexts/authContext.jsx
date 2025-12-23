import React, { useState, createContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState(null);

    const authenticate = async (username, password) => {
        const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.success) {
            setToken(data.token);
            setUserName(username);
        }
        return data;
    };

    const register = async (username, password) => {
        const response = await fetch('http://localhost:8080/api/users?action=register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        return response.json();
    };

    const signout = () => {
        setToken(null);
        setUserName(null);
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                userName,
                authenticate,
                register,
                signout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;