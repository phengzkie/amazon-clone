import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const { email, password } = login;

  const onChange = e =>
    setLogin({ ...login, [e.target.name]: e.target.value });

  const signIn = e => {
    e.preventDefault();

    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
      <div className="login">
        <Link to='/'>
          <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
        </Link>

        <div className="login_container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input type="text" value={email} name="email" onChange={onChange} />

            <h5>Password</h5>
            <input type="password" value={password} name="password" onChange={onChange} />

            <button className="login_signinButton" onClick={signIn}>Sign In</button>
          </form>

          <p>
            By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
          </p>

          <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>

        </div>
      </div>
    
  )
}

export default Login
