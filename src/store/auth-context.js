import React, { useState } from "react";
import { Route } from "react-router-dom";
import Auth from "../pages/AuthPage";
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;


    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        console.log('settimeout is called')
    }
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);



        // setTimeout(
        //     logoutHandler, 5000
        // )
        setTimeout(() => {
            console.log('set timeout is called');
            localStorage.removeItem('token');
        }, 5000);

    }

    const ContextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return (
        <AuthContext.Provider value={ContextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;