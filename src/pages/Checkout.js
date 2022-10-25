import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    let subject = useLoaderData()

    return (
        <div>
            <h1 className='text-7xl font-bold text-success'>!!! WOW !!!</h1>
            <h1 className='text-4xl my-7 text-info'>We will be very happy to have you with us</h1>
            <h1 className='text-5xl'>
            Welcome to learn <br /><span className='text-primary italic my-2 text-6xl'>{subject.name}</span><br />By WOW Learning <br /><br />
            Join Use Today
            </h1>
        </div>
    );
};

export default Checkout;