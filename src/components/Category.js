import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    let subjects = useLoaderData();
    console.log(subjects);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5'>
        </div>
    );
}; 

export default Category;