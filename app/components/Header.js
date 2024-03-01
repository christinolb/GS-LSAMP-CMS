import React from 'react';
import '../styles/header.css';
import Image from 'next/image';
import run from '../../public/ru-n_logo.png'
import seal from '../../public/Rutgers_University_seal.png'

const Header = ({pageTitle='Page Title'}) => {
  return (
    <>
      <header>

        <div className='icons'>
          <Image
            className='header-icon'
            src={run}
            alt="Rutgers Logo"
            width={60}
            height={60}
          />
        
          <Image
            className='header-icon'
            src={seal}
            alt="Rutgers Logo"
            width={60}
            height={60}
          />
        </div>
          
        <h1 id='nav-heading'>GS-LSAMP Content Management System</h1>

        <div id='page-link'>
          <h3><a href='https://run-gslsamp-site.vercel.app/' target='_blank'>Main Page</a></h3>
        </div>

      </header>

      <h1 id='page-heading'>{pageTitle}</h1>
    </>    
  );
};

export default Header;