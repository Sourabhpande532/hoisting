import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

import classes from './auth.module.scss';

function Register() {
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const fetchUserInfo = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      await axios.post('/api/auth/register', fetchUserInfo).then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          navigate('/auth');
        }
      });
    } catch (error) {
      toast.error('Registration Failed');
    }

    fetchUserInfo.password.value = undefined;
  };

  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Register</h1>
      <form className={classes.authForm} onSubmit={register}>
        <label htmlFor="name">
          Full Name:
          <input
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Full Name"
            required
          />
        </label>
        <label htmlFor="email">
          email:
          <input
            name="email"
            type="email"
            autoComplete="off"
            placeholder="email"
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
        <br />
        <Link className={classes.log} to="/auth">
          Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
