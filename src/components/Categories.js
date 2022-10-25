import React,{useContext} from 'react';
import {BiChevronRight} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

const Categories = () => {

    let {thm} = useContext(ThemeContext)

    return (
        <div className='flex flex-col mt-5'>
            <Link className='text-2xl mt-2 hover:underline w-fit mx-auto' to='/courses/all'>All Subjects <BiChevronRight className='inline'/></Link>
            <Link className='text-2xl mt-2 hover:underline w-fit mx-auto' to='/courses/science'>Science Subjects <BiChevronRight className='inline'/></Link>
            <Link className='text-2xl mt-2 hover:underline w-fit mx-auto' to='/courses/general'>General Subjects <BiChevronRight className='inline'/></Link>
        </div>
    );
};

export default Categories;