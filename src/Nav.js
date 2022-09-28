import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css';
import logo from './assets/loga.jpg';

function Nav() {

  const navStyle = {
    div: {
      color: 'pink',
      fontSize: '20px',
      fontFamily: 'monaco',
      textDecoration: 'none',
    }
  }; 

  return (
   <nav>
     <div className='container-nav'>
    <NavLink to="/" className='home-button'>
      <a href="logo">
        <img className="logo" src={logo} alt="alt"/></a></NavLink>
     </div>    
       <ul className="nav-links">
         <Link style={navStyle.div} stylelink={{textDecoration:'none'}} to="/about">
           <li>About</li>
           </Link>
           <Link style={navStyle.div} to="/shop">
           <li>Shop</li>
           </Link>
           <Link style={navStyle.div} to="/login">
           <li>Login</li>
           </Link>
       </ul>
   </nav>
  );
}

export default Nav;
