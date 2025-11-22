import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex items-center'>
            <div className='w-1/3 '></div>

            <div className="w-1/3 flex gap-4 justify-center">
                <NavLink to={'/'} className="font-normal text-[18px] text-accent ">Home</NavLink> 
                <NavLink to={'/about'} className="font-normal text-[18px] text-accent ">About</NavLink> 
                <NavLink to={'/career'} className="font-normal text-[18px] text-accent ">Career</NavLink> 
            </div>

            <div className="login-btn w-1/3 flex gap-2 justify-end">
                <img className='mix-blend-multiply' src={user} alt="" />
                <Link to={'/auth/login'} className='bg-primary text-base-200 font-semibold text-[20px] px-5 py-2 rounded-2xl '>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;