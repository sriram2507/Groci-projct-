import React from 'react';
import {FaShoppingCart,FaUserAlt,FaSistrix} from "react-icons/fa";

function Header(){

    return (
      <div className="header">
        <span className='head-title' id='logo'><img src="logo1575713051.png" width="170px" height="75px"></img></span>
       {/* <span className='head-title'><input type='text' placeholder='Search For Products...'search /><span><button><FaSistrix/></button></span></span> */}
       <span className='head-title'><sup>10</sup><FaShoppingCart/> Cart</span>
        <span className='head-title' ><FaUserAlt/> LogIn</span>
        
    </div>
    
    );
}
export default Header;