import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='font-extrabold mt-36 px-10'>
            <h1 className='text-4xl sm:text-6xl'>Explore Our</h1>
            <Link className='btn btn-info text-3xl sm:text-5xl my-10 py-10 pb-24 px-16 italic' to='/courses'>Subjects</Link>
        </div>
    );
};

export default Home;