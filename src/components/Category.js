import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';

const Category = () => {

    let subjects = useLoaderData();
    return (

        // default right side of subjects 
        <div>
            {/* title  */}
            <p className='mt-10 text-5xl font-bold italic'>All Subjects</p>
            <br />
            <p className='mb-10 text-5xl font-bold italic'>Total: <span className='text-success'>{subjects.length}</span></p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 w-full'>
                {/* cards of subjects  */}
                {
                    subjects.map(sub=>{
                        return <div className='card glass p-5 shadow-xl flex flex-col justify-between' key={sub._id}
                        >
                            <div>
                                <img className='rounded-xl mb-3 w-full mx-auto' src={sub.pic} alt="" />
                                <p className='text-xl italic'>Category: <span
                                className='text-accent font-medium'
                                >{sub.category}</span></p>
                                <p className='text-2xl mt-3'><span className='text-info font-bold'>{sub.name}</span></p>
                            </div>
                            <Link to={`/courses/details/${sub._id}`} className='btn btn-outline btn-success mt-5'>Details</Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}; 

export default Category;