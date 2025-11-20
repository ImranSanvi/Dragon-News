import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div className=''>
            <h2 className='font-semibold text-[20px] '>All Categories</h2>

            <div className='grid grid-cols-1 mt-5 gap-2'>
                {
                    categories.map( (category) => ( <NavLink key={category.id} className="btn font-normal hover:font-bold text-[20px] border-0 text-accent" to={`/category/${category.id}`}>{category.name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;