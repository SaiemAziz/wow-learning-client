import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const Checkout = () => {
    let subject = useLoaderData()
    let {user} = useContext(AuthContext)
    return (
        <div className='card glass p-5 shadow-xl'>
            <h1 className='text-4xl font-bold text-success'>!!! WOW !!!</h1>
            <h1 className='text-2xl italic font-bold'>{user.displayName}</h1>
            <img className='mx-auto rounded-full my-4' src={user.photoURL} alt="" />
            <h1 className='text-2xl my-7 text-info'>We will be very happy to have you with us</h1>
            <h1 className='text-2xl'>
            Welcome to learn <br /><span className='text-primary italic my-2 text-3xl'>{subject.name}</span><br />By WOW Learning <br /><br />
            Join Use Today
            </h1>
        </div>
    );
};

export default Checkout;