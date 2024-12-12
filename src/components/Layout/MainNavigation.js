import { useContext } from 'react';
import { Route } from 'react-router-dom';
import AuthForm from '../Auth/AuthForm';
import { Link } from 'react-router-dom';
import AuthContext from "../../store/auth-context"
import classes from './MainNavigation.module.css';
import HomePage from '../../pages/HomePage';

const MainNavigation = () => {

  const authCtx = useContext(AuthContext)

  const isLoggedIn = authCtx.isLoggedIn;

  const logOutHandler = () =>{
    authCtx.logout();
    <Route path="/">
        <HomePage/>
      </Route>
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
