import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleSubject = () => {
    let subject = useLoaderData()
    return (
        <div>
            {subject.name}
        </div>
    );
};

export default SingleSubject;