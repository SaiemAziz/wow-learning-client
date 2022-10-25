import React from 'react';
import { Link } from 'react-router-dom';
import {BiChevronDown} from 'react-icons/bi'

const AccordionList = ({cat, subjects}) => {

    
    let subjectList = subjects.filter(s => s.category === cat.toLowerCase())
    if(cat==='All')
        subjectList = subjects
    return (
        <div className="collapse">
                <input type="checkbox" /> 
                <div className="collapse-title text-xl font-medium">
                    <Link className='text-2xl mt-2 hover:underline w-fit mx-auto'>{cat} Subjects <BiChevronDown className='inline'/></Link>
                </div>
                <div className="collapse-content px-4 rounded-xl text-center flex flex-col"> 
                    {
                        subjectList.map((s, idx)=>{
                            return <Link to={`/courses/subject/${s._id}`}
                            className='py-0 btn btn-outline btn-info'
                            key = {s._id}
                            >{idx+1}. {s.name}</Link>
                        })
                    }
                </div>
            </div>
    );
};

export default AccordionList;