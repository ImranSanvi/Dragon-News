import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    });

    return (
        <div className='flex flex-col justify-center items-center gap-3 my-[50px] '>
            <img src={logo} alt="" />
            <p className='font-normal text-[18px]'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-[20px]'>{formattedDate}</p>
        </div>
    );
};

export default Header;