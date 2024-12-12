import React,{useState} from "react";
import { Route } from "react-router-dom";
import Auth from "../pages/AuthPage";
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
})

export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    }

    const logoutHandler = () => {
        setToken(null);
      <Route path="/auth">
        <Auth/>
      </Route>
       
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