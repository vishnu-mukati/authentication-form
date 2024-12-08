import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  // const [isLoading,setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (event) =>{
    event.preventDefault();
    
   const enteredEmail = emailInputRef.current.value;
   const enteredPassword = passwordInputRef.current.value;

    if(isLogin){

    }else{
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7KB5CBDaD9KLz18uxYk-F85I2UmMThP0',
        {
          method:'POST',
          body:JSON.stringify({
             email:enteredEmail,
             password : enteredPassword,
             returnSecureToken : true,
          }),
          headers:{
            'Content-Type' : 'application/json'
          }
        }
      ).then(res=>{
        if(res.ok){

        }else{
          res.json().then((data)=>{
             console.log(data);
          })
        }
      })
    }
  }
  

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        
        <div className={classes.actions}> 
          <button className={classes.actions} >{isLogin ? 'Login' : 'Create Acount'}</button>
        </div> 
        
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
