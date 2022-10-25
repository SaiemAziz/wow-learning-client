import React from 'react';
import { useLoaderData} from 'react-router-dom';

const Category = () => {

    let subjects = useLoaderData();
    console.log(subjects);
    return (
        <div>

            <p className='mt-5 text-5xl font-bold italic'>Category: All</p>
            <p className='mb-5 text-5xl font-bold italic'>Total: {subjects.length}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5 w-full'>
                {
                    subjects.map(sub=>{
                        return <div className='card glass p-5 shadow-xl'>
                            <img className='rounded-xl mb-3' src={sub.pic} alt="" />
                            <p className='text-xl italic'>Category: {sub.category}</p>
                            <p className='text-3xl mt-3'>Name: <span className='text-info font-bold'>{sub.name}</span></p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}; 

export default Category;