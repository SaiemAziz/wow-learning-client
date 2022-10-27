import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';
import { AuthContext } from '../context/Auth';
import {toast} from 'react-toastify'
import { BiErrorCircle } from 'react-icons/bi';


const Register = () => {
    let {thm} = useContext(ThemeContext)
    let {setUser, createUser , redirect, updateUser, setLoading} = useContext(AuthContext)
    let [show, setShow] = useState(false)
    let [er, setEr] = useState('')
    let from = redirect || '/';
    let navigate = useNavigate()

    // register user
    let clickedForm = (e) => {
        e.preventDefault();
        console.log(e)
        let userEmail = e.target.email.value
        let userName = e.target.name.value
        let userImage = e.target.image.value
        let userPassword = e.target.password.value
        let userConfirm = e.target.confirm.value
        let userInfo = {
            displayName: userName,
            photoURL : userImage
        }
        if(userPassword !== userConfirm)
        {
            setEr('Password is not same')
            e.target.reset();
            return;
        }
        createUser(userEmail, userPassword)
            .then(res => {

                setUser(res.user)
                setUser(u => {
                    u.displayName = userName;
                    return u;
                })
                setEr('')
                updateUser(userInfo)
                toast.success('Successfully Registered and Logged in')
                navigate(from, {replace: true})
            })
            .catch(err => {
                setEr(err.code.replaceAll('auth/','').replaceAll('-',' ').toUpperCase())
            })
        setLoading(false);
        e.target.reset();
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {/* header  */}
            <div className='flex justify-center items-center my-10'>
                <div>
                    <h1 className='text-6xl my-4'>  
                    Please
                    </h1>    
                    <h1 className='text-7xl my-4 italic text-info font-medium'>Register</h1> 
                </div>
            </div>

            {/* Form  */}
            <form className={`text-gray-300 text-left p-10 grid gap-5 grid-cols-1 sm:grid-cols-2 ${thm ? "bg-stone-800" : "bg-info-content"}`} onSubmit={clickedForm}>
                <h1 className='text-2xl'>Full Name</h1>
                <input type="text" name="name"
                className='input input-bordered input-primary text-primary' placeholder='Enter Full Name' required/>
                <h1 className='text-2xl'>Image Link</h1>
                <input type="text" name="image"
                className='input input-bordered input-primary text-primary' placeholder='Enter Image URL' />
                <h1 className='text-2xl'>Email</h1>
                <input type="email" name="email"
                className='input input-bordered input-primary text-primary' placeholder='Enter Your Email' required />

                <h1 className='text-2xl'>Password</h1>
                <input type={show ? 'text' :"password"} name="password"
                className='input input-bordered input-primary text-primary' placeholder='Enter Password' required />

                <h1 className='text-2xl'>Confirm Password</h1>
                <input type={show ? 'text' :"password"} name="confirm"
                className='input input-bordered input-primary text-primary' placeholder='Re-Enter Password' required />
                

                <div className='sm:col-span-2 flex justify-end'>
                <h1 className='text-warning'>Show Password <><input type="checkbox" onClick={()=>setShow(!show)} className="checkbox-sm checkbox outline ml-5" /></></h1>
                </div>
                { er &&
                    <div className='sm:col-span-2'>
                        <p className='text-error flex items-center'><BiErrorCircle className='mr-2 text-xl'/>  {er}</p>
                    </div>
                }
                <div className='sm:col-span-2 flex justify-between'>
                    <button type='submit' className='btn btn-success'>Register</button>
                    <Link to='/login' className='btn btn-outline btn-info'>Already Have Account?</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;