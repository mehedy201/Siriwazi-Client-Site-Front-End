import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const NavigationMenu = () => {
    // Logo Click Handle   
    const navigate = useNavigate();
    const logoClick = () => {
        navigate('/')
    }

    return (
        <div className='bg-[#8f0909]'>
          
        <div className="navbar xl:max-w-[1140px] lg:max-w-[90%] md:max-w-[90%] sm:max-w-[90%] w-[95%] mx-auto">
            <div className="navbar-start">
              <p onClick={logoClick} className='py-5 fw-bold text-2xl for_font_family cursor-pointer text-white'>Database Management</p>
            </div>
            <div className="navbar-end lg:flex">
              <ul className="menu menu-horizontal px-1">
                <Link  className='font-bold text-xl text-white' to={'/'}>Home</Link>
              </ul>
            </div>
        </div>
        </div>
    );
};

export default NavigationMenu;