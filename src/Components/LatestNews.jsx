import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center'>
            <p className='text-base-200 bg-secondary font-medium text-[20px] p-2  '>Latest</p>

            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-semibold text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, unde!</p>  
                <p className='font-semibold text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, unde!</p>  
                <p className='font-semibold text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, unde!</p>  
            </Marquee>
        </div>
    );
};

export default LatestNews;