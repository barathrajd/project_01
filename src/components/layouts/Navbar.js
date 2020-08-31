import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <Link to='/'>
          <img src={Logo} alt='Logo' className='logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span>
            <i className='fa fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/aboutus'>
                About us
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/handcraftedGifts'>
                Handcrafted gifts
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/handcraftedJewels'>
                Handcrafted Jewels
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/diyKits'>
                Diy kits
              </Link>
            </li>
            <li className='nav-item contact'>
              <Link className='nav-link ' to='/contactus'>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
