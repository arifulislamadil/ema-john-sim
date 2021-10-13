import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Login.css";


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" id="" name="" placeholder="Your Email" />
                    <br />
                    <input type="password" id="name" name="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <span>New to ema-john ? <Link to="/register">Register</Link> </span>

                <div>-------------or-------------</div>
                <button className="btn btn-regular"
                    onClick={handleGoogleLogin}
                >Google-Sign In</button>
            </div>
        </div>
    );
};

export default Login;