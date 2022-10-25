import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';
import { AuthContext } from '../context/Auth';
import { toast } from 'react-toastify';
import { BsGithub, BsGoogle } from 'react-icons/bs';

const Login = () => {
    let {thm} = useContext(ThemeContext)
    let {resetPassword, logIn, setUser, googleLogin, redirect, githubLogin} = useContext(AuthContext)
    let [show, setShow] = useState(false)
    let from = redirect || '/';
    let navigate = useNavigate()
    

    // log in by email and password
    let clickedForm = (e) => {
        e.preventDefault();
        let userEmail = e.target.email.value
        let userPassword = e.target.password.value
        logIn(userEmail, userPassword)
            .then((res)=>{
                setUser(res.user)
                toast.success('Successfully Logged in')
                navigate(redirect, {replace: true})
            })
            .catch((err)=>{
                toast.error(err.code.replaceAll('auth/','').replaceAll('-',' ').toUpperCase())
            })
        e.target.reset()
    }

    // log in by google
    let clickedGoogle = () => {
        googleLogin()
        .then((res)=>{
            setUser(res.user)
            toast.success('Successfully logged in')
            navigate(redirect, {replace: true})
        })
        .catch((err)=>{
            toast.error(err.code.replaceAll('auth/','').replaceAll('-',' ').toUpperCase())
        })
    }

    // log in by google
    let clickedGithub = () => {
        githubLogin()
            .then((res)=>{
                setUser(res.user)
                toast.success('Successfully logged in')
                navigate(redirect, {replace: true})
            })
            .catch((err)=>{
                toast.error(err.code.replaceAll('auth/','').replaceAll('-',' ').toUpperCase())
            })
    }

    //send password verification email
    let clickedForgotPassword = (e) => {
        e.preventDefault();
        let userEmail = e.nativeEvent.path[2].email;
        resetPassword(userEmail.value)
        .then(()=>{
            toast.success('SENT A RESET PASSWORD EMAIL')
        })
        .catch((err)=>{
            toast.error(err.code.replaceAll('auth/','').replaceAll('-',' ').toUpperCase())
        })
        userEmail.value ='';
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex justify-center items-center my-10'>
                <h1 className='text-7xl italic text-accent-focus font-medium'>Please Log In</h1>
            </div>
            <form className={`text-gray-300 text-left p-10 grid gap-5 grid-cols-1 sm:grid-cols-2 ${thm ? "bg-stone-800" : "bg-info-content"}`} onSubmit={clickedForm}>
                <h1 className='text-2xl'>Email</h1>
                <input type="email" name="email"
                className='input input-bordered input-primary text-primary' required />

                <h1 className='text-2xl'>Password</h1>
                <input type={show ? 'text' :"password"} name="password"
                className='input input-bordered input-primary text-primary' required />
                

                <div className='sm:col-span-2 flex justify-end'>
                <h1 className='text-warning'>Show Password <><input type="checkbox" onClick={()=>setShow(!show)} className="checkbox-sm checkbox outline ml-5" /></></h1>
                </div>

                <div className='sm:col-span-2 flex justify-between'>
                    <button type='submit' className='btn btn-success'>Log In</button>
                    <Link to='/register' className='btn btn-outline btn-info'>No Account?</Link>
                </div>
                <div className='sm:col-span-2 flex justify-between text-blue-500'>
                    <p onClick={clickedForgotPassword} className='link'>Forgot Password?</p> 
                </div>
                <div className='sm:col-span-2 flex justify-center text-3xl'>
                    <p onClick={clickedGoogle} className='link mx-4'><BsGoogle/></p> 
                    <p onClick={clickedGithub} className='link mx-4'><BsGithub/></p> 
                </div>
            </form>
        </div>
    );
};

export default Login;