import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const Category = () => {

    let subjects = useLoaderData();
    console.log(subjects);
    let cat = useLocation();
    cat = (cat.pathname.replace('/courses/', ''))
    cat = cat.charAt(0).toUpperCase() + cat.slice(1)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
            <p className='mt-5 text-5xl font-bold italic'>Category: {cat}</p>
            <p className='mb-5 text-5xl font-bold italic'>Total: {subjects.length}</p>
            {
                subjects.map(sub=>{
                    return <div className='card glass p-5 shadow-xl'>
                        <img src={sub.pic} alt="" />
                        <p className='text-3xl'>Name: {sub.name}</p>
                    </div>
                })
            }
        </div>
    );
}; 

export default Category;