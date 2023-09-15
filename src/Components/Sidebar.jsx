import React, { useState } from 'react';
import{ FaBars, 
    FaHome, 
    FaShoppingBag, 
    FaMicrosoft,FaShoppingCart,FaUserAlt,FaSistrix,FaCarrot
}from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { FaWineBottle,FaIceCream ,FaBowlRice,FaEgg} from "react-icons/fa6";
import { RiOilFill } from "react-icons/ri";
import { LuGrape } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {
    
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/Beverages",
            name:"Beverages & Snacks",
            icon:<FaWineBottle/>
        },
      
        {
            path:"/Dairy",
            name:"Dairy",
            icon:<GiMilkCarton/>,
        },
        
        {
            path:"/Egg",
            name:"Egg & Meat",
            icon:<FaEgg/>,
            
        },
        
        {
            path:"/Foodgrains ",
            name:"Food Grains , Oil & Masalas",
            icon:<RiOilFill/>,
            
        },
        {
            path:"/Fruit",
            name:"Fruits",
            icon:<LuGrape/>,
    
            
        },
        
        {
            path:"/IceCream",
            name:"IceCream",
            icon:<FaIceCream/>,
    
            
        },
       
        {
            path:"/Vegtables",
            name:"Vegtables",
            icon:<FaCarrot/>,
    
            
        },
        {
            path:"/OrderedItems",
            name:"Ordered Items",
            icon:<FaShoppingBag/>
        }
    ]
    return(
    <div className="container">
    <div style={{width: isOpen ? "200px" : "50px" }} className="sidebar">
   
        <div className="top_section">
            
            <div style={{marginLeft: isOpen ? "150px"  : "0px"}} className="bars">
                {/* <div style={{width :isOpen ? "1600px" : "auto" }} className="header"></div> */}
                <FaBars onClick={toggle}/>
                
 
            </div>
        </div>
        
     
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
        
    </div>
    
<main>{children}</main>
 </div>
 
);
};

export default Sidebar;