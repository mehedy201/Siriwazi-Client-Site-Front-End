import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/siriwazi.png'

const NavigationMenu = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <Link to={'/'}>Home</Link>
                </ul>
              </div>
              <img className='py-3' style={{height: '100px', width: 'auto'}} src={logo} alt="siriwazi" />
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  <Link  className='font-bold text-xl' to={'/'}>Home</Link>
              </ul>
            </div>
        </div>
    );
};

export default NavigationMenu;