import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

const Login = () => {
    let {thm} = useContext(ThemeContext)
    let [show, setShow] = useState(false)
    
    let clickedForm = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    let clickedForgotPassword = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='flex justify-center items-center'>
                <h1 className='text-7xl italic text-accent-focus font-medium'>Please Log In</h1>
            </div>
            <form className={`text-gray-300 text-left p-10 grid gap-5 grid-cols-1 sm:grid-cols-2 ${thm ? "bg-stone-800" : "bg-info-content"}`} onSubmit={clickedForm}>
                <h1 className='text-2xl'>Email</h1>
                <input type="email" name="email"
                className='input input-bordered input-primary text-primary' required />

                <h1 className='text-2xl'>Password</h1>
                <input type={show ? 'text' :"password"} name="password"
                className='input input-bordered input-primary text-primary' required />
                

                <div className='col-span-2 flex justify-end'>
                <h1 className='text-warning'>Show Password <><input type="checkbox" onClick={()=>setShow(!show)} className="checkbox-sm checkbox outline ml-5" /></></h1>
                </div>

                <div className='col-span-2 flex justify-between'>
                    <button type='submit' className='btn btn-success'>Log In</button>
                    <Link to='/register' className='btn btn-outline btn-info'>No Account?</Link>
                </div>
                <div className='col-span-2 flex justify-between text-blue-500'>
                    <p onClick={clickedForgotPassword} className='link'>Forgot Password?</p> 
                </div>
            </form>
        </div>
    );
};

export default Login;