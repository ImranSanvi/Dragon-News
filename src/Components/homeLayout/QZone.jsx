import React from 'react';

import swimming from './../../assets/swimming.png'
import playground from './../../assets/playground.png'
import classroom from './../../assets/class.png'

const QZone = () => {
    return (
        <div className='bg-base-300 p-4'>
            <h2 className='font-semibold text-[20px] mb-8 '>Qzone</h2>
            <div>
                <img src={swimming} alt="" />
                <img src={playground} alt="" />
                <img src={classroom} alt="" />
            </div>
        </div>
    );
};

export default QZone;