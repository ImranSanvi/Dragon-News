import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    if (!news) return <p>Loading...</p>;
    return (
        <div className='border border-base-300 p-5 rounded-2xl mr-10 space-y-5'>
            <img className='w-full h-[410px] rounded-2xl' src={news.image_url} alt="" />
            <h2 className='font-bold text-[25px] '>{news.title}</h2>
            <p className='text-[#706F6F]'>{news.details}</p>

            <Link to={`/category/${news.category_id}`} className='bg-secondary text-white font-bold px-4 py-2 rounded-[5px]'> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;