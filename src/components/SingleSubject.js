import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleSubject = () => {
    let subject = useLoaderData()
    return (
        <div className='md:mt-10 my-5 card glass p-5 mx-5 text-primary'>
            <h1 className='text-6xl my-5 font-medium'>Details of</h1>
            <h1 className='italic text-6xl font-bold text-info mb-5'>{subject.name}</h1>
            <img className='w-2/3 mx-auto rounded-2xl shadow-xl'
            src={subject.pic} alt="" />
            <p className='text-2xl my-5 text-left'>Category: {subject.category}</p>
            <p className='text-2xl mt-5 text-left'>Description:</p>
            <p className='text-justify mb-10'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, nihil commodi? Asperiores molestiae quod ab eius! Soluta nulla architecto tempore iste obcaecati, ea neque! Sit nemo vel repellat beatae recusandae doloremque ipsa autem sequi eveniet quaerat esse, sapiente earum dicta consequatur numquam, unde ipsum et ad. Ab nesciunt error cumque.
            </p>

            <Link to='/checkout' className='btn btn-info  text-xl font-bold'>Premium Access</Link>
        </div>
    );
};

export default SingleSubject;