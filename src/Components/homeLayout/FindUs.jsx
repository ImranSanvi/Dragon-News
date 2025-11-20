import React from 'react';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold text-[20px] mb-5 '>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn bg-white justify-start join-item"> <BiLogoFacebookCircle size={23} /> Facebook</button>
                <button className="btn bg-white justify-start join-item"> <FaTwitter size={23} />Twitter</button>
                <button className="btn bg-white justify-start join-item"> <FaSquareInstagram size={23} /> Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;