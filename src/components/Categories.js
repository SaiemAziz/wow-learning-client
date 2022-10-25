import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import AccordionList from './AccordionList';

const Categories = ({subjects}) => {

    let {thm} = useContext(ThemeContext)
    

    return (
        <div className='flex flex-col mt-5 text-left'>
            <AccordionList subjects={subjects} cat={'All'}/>
            <AccordionList subjects={subjects} cat={'Science'}/>
            <AccordionList subjects={subjects} cat={'General'}/>
        </div>
    );
};

export default Categories;