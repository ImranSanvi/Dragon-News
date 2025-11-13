import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="nav flex gap-4">
                <NavLink to={'/'} className="font-normal text-[18px] text-accent ">Home</NavLink> 
                <NavLink to={'/about'} className="font-normal text-[18px] text-accent ">About</NavLink> 
                <NavLink to={'/career'} className="font-normal text-[18px] text-accent ">Career</NavLink> 
            </div>

            <div className="login-btn flex gap-2">
                <img src={user} alt="" />
                <button className='bg-primary text-base-200 font-semibold text-[20px] px-5 py-2 rounded-2xl '>Login</button>
            </div>
        </div>
    );
};

export default Navbar;