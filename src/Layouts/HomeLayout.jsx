import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homeLayout/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../Components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <section className='w-10/12 mx-auto bg-base-300 rounded-[5px] my-[30px] p-2 '>
                <LatestNews></LatestNews>
            </section>

            <nav className='w-10/12 mx-auto '>
                <Navbar></Navbar>
            </nav>

            <main className='w-10/12 mx-auto grid grid-cols-12 mt-[30px] gap-5 '>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;