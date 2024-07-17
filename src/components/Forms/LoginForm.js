import React from 'react';
import { Link } from 'gatsby';

const LoginForm = () => {
     
  return (
    <div className='container pt-120 pb-250'>
        <div className="login-form-container " >
            <h1>Hi, Welcome back!</h1>
            <form>
                <div className="login-form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="login-form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <div className='login-botom'>
                    <Link to='/' className='btn login-form-button'>Sign in</Link>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginForm;
