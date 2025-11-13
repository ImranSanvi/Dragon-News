import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <section className='w-10/12 mx-auto bg-base-300 rounded-[5px] my-[30px] p-2 '>
                <LatestNews></LatestNews>
            </section>

            <nav className='w-10/12 mx-auto'>
                <Navbar></Navbar>
            </nav>

            <main>
                <button className='btn btn-accent'>Click me</button>
            </main>
        </div>
    );
};

export default HomeLayout;