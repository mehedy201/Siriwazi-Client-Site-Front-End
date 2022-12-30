import React, {  useRef } from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  Spin } from 'antd';
import {  useLocation, useNavigate } from 'react-router-dom';
import './AdminLogin.css'
import { auth } from '../../firebase.init';

const AdminLogin = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  let from = location.state?.from?.pathname || '/admin-dashboard';
  const navigate = useNavigate('')

  // Sing In with email and password
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSubmitButtonLogIn  = event =>{
    event.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  let errorElement;
  if(error){
    errorElement = <p className="text-danger my-3">{error.message}</p>
  }
  if(loading){
    return <Spin/>
  }
  if(user){
    navigate(from, {replace: true});
  }

    return (
        <div  className='h-screen xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto'>
            <p className='mt-16 text-2xl text-center font-bold'>Admin Login</p>
            <div className='flex justify-center'>
                <form>
                  <p>Email</p>
                  <input className='login_input p-2 mb-2' ref={emailRef} type="email" placeholder="Enter email" required/>
                  <p>Password</p>
                  <input className='login_input p-2 mb-2' ref={passwordRef} type="password" placeholder="Password" required/>
                  <br />
                  <input className='btn btn-sm btn-primary' onClick={handleSubmitButtonLogIn} type="submit" value="Log In" />
                </form>
                {
                  errorElement
                }
            </div>
        </div>

    );
};

export default AdminLogin;