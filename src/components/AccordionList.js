import React from 'react';
import { Link } from 'react-router-dom';
import {BiChevronRight} from 'react-icons/bi'

const AccordionList = ({cat, subjects}) => {

    
    let subjectList = subjects.filter(s => s.category === cat.toLowerCase())
    if(cat==='All')
        subjectList = subjects
    console.log(subjectList)
    return (
        <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    <Link className='text-2xl mt-2 hover:underline w-fit mx-auto'>{cat} Subjects <BiChevronRight className='inline'/></Link>
                </div>
                <div className="collapse-content px-4 rounded-xl text-center"> 
                    {
                        subjectList.map((s, idx)=>{
                            return <Link to={`/courses/subject/${s._id}`}
                            className='block'
                            key = {subjects._id}
                            >{idx+1}. {s.name}</Link>
                        })
                    }
                </div>
            </div>
    );
};

export default AccordionList;