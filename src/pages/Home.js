import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 className='text-5xl mt-10'>Welcome To <span className='italic font-bold text-primary'>Wow Learning</span></h1>
        <div className='font-extrabold flex p-10 md:flex-row flex-col'>
            <div className='md:w-1/2'> 
                <img className='w-full rounded-2xl shadow-xl' src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center'> 
                
                <h1 className='text-4xl sm:text-6xl'>Explore Our</h1>
                <Link className='btn btn-info text-3xl sm:text-5xl my-10 py-10 pb-24 px-16 rounded-3xl btn-outline' to='/courses'>Subjects <AiFillCaretRight className='ml-4'/></Link>
                <h1 className='text-4xl sm:text-6xl'>Class 9-10</h1>
            </div>
        </div>
        </div>
    );
};

export default Home;