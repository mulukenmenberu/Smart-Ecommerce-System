
import { Link } from '@mui/material'
import { FaBars } from 'react-icons/fa'
import '../style/main.css'
const TopNavBar = () =>{
    return (
        <>
         <div className='top-nav-bar'>
           <span className='nav-bar-toggle'><FaBars className='toggle-menu'/></span>
           <Link to ="/" className='headermenu link'>Today's Deals</Link>
           <Link to ="/"  className='headermenu link'>Gift Cards</Link>
           <Link to ="/"  className='headermenu link'>Electronics</Link>
           <Link to ="/"  className='headermenu link'>House Appiliances</Link>
           <Link to ="/"  className='headermenu link'>Gamming</Link>
           <Link to ="/"  className='headermenu link'>Sports</Link>
           <Link to ="/"  className='headermenu link'>Shoe & Cloths</Link>
           <Link to ="/"  className='headermenu link'>Kids</Link>
                    
       </div>
        </>  
    )
}

export default TopNavBar
     