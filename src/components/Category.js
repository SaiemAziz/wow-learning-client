import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';

const Category = () => {

    let subjects = useLoaderData();
    return (
        <div>

            <p className='mt-5 text-5xl font-bold italic'>All Subjects</p>
            <p className='mb-5 text-5xl font-bold italic'>Total: <span className='text-success'>{subjects.length}</span></p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5 w-full '>
                {
                    subjects.map(sub=>{
                        return <div className='card glass p-5 shadow-xl lg:min-h-[500px]' key={sub._id}
                        >
                            <img className='rounded-xl mb-3' src={sub.pic} alt="" />
                            <p className='text-xl italic'>Category: <span
                            className='text-accent font-medium'
                            >{sub.category}</span></p>
                            <p className='text-3xl mt-3'><span className='text-info font-bold'>{sub.name}</span></p>
                            <Link to={`/courses/subject/${sub._id}`} className='btn btn-outline btn-success mt-5'>Details</Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}; 

export default Category;