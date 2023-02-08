import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import Register from "../components/Auth/Register";
import classes from "./auth.module.scss"
import useAuth from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const BASE_URL = "https://hoisting-production.up.railway.app"
/*The proccess is once you login that no one can be able to visit any route like login,register,edit ..any */  
const navigate = useNavigate();
const {auth} = useAuth();
/*The vision: if this auth is true that mean you already logged in user so instead of rendaring this belew auth page we'll back to our home page  */

useEffect(()=>{
if(auth){
  navigate("/")
}
},[auth, navigate])

  return (  
    <Layout>
      <div className={classes.form_container}>
        <Register BASE_URL={BASE_URL}/>
      </div>
    </Layout>
  )
}

export default Auth