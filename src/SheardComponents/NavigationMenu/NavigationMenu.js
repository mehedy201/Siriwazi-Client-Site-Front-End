import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/siriwazi.png'

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
              <img onClick={logoClick} className='py-3' style={{height: '100px', width: 'auto', cursor: 'pointer'}} src={logo} alt="siriwazi" />
              <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <Link to={'/'}>Home</Link>
                </ul>
              </div>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  <Link  className='font-bold text-xl text-white' to={'/'}>Home</Link>
              </ul>
            </div>
        </div>
        </div>
    );
};

export default NavigationMenu;