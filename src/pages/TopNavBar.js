
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import '../style/main.css'
import React from 'react'
const TopNavBar = () =>{
    return (
        <>
         <div className='top-nav-bar'>
           <span className='nav-bar-toggle'><FaBars className='toggle-menu'/></span>
           <Link to ="/today-deals/1" className='headermenu link'>Today's Deals</Link>
           <Link to ="/gift-cards/2"  className='headermenu link'>Gift Cards</Link>
           <Link to ="/electronics/3"  className='headermenu link'>Electronics</Link>
           <Link to ="/house-appeliances/4"  className='headermenu link'>House Appiliances</Link>
           <Link to ="/gaming/5"  className='headermenu link'>Gamming</Link>
           <Link to ="/sports/6"  className='headermenu link'>Sports</Link>
           <Link to ="/shoe-and-cloth/7"  className='headermenu link'>Shoe & Cloths</Link>
           <Link to ="/kids/8"  className='headermenu link'>Kids</Link>
                    
       </div>
        </>  
    )
}

export default TopNavBar
     