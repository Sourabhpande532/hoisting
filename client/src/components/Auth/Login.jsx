import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './auth.css';

function Login() {
  const navigate = useNavigate();

  const loginOnSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await axios.post('/api/auth/login', loginData).then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          navigate('/');
        }
      });
    } catch (error) {
      toast.error('login failed');
    }
  };
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={loginOnSubmit}>
        <div className="user-box">
          <input type="email" name="email" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>
        <button type="submit">
          <span />
          <span />
          <span />
          <span />
          Submit
        </button>
        <br />
        <br />
        <Link className="sign" to="/re">
          Sign Up
        </Link>
      </form>
    </div>
  );
}

export default Login;
