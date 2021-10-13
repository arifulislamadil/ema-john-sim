import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>Create Accout</h2>
                <form onSubmit="">
                    <input type="text" name="" id="" placeholder="Your Name" />
                    <br />
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="email" name="" id="" placeholder="Re-enter Your Email" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Alreday have an account ? <Link to="/login">Login</Link> </p>
                <div>------------or-------------</div>
                <button className="btn btn-regular">Google Signin</button>
            </div>
        </div>
    );
};

export default Register;