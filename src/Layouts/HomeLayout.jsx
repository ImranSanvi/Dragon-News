import React from 'react';
import Header from '../Components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main>
                <button className='btn btn-accent'>Click me</button>
            </main>
        </div>
    );
};

export default HomeLayout;