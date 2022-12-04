
import { useState } from 'react'
import {FaSearch, FaShoppingCart, FaShopware, FaUserCircle } from 'react-icons/fa'
import '../style/main.css'
import React from 'react'
import { Link } from 'react-router-dom'
const TobBar = () =>{
    const[myaccount,showMyccount] = useState(false)
    const[mycart,showMyCart] = useState(false)

    const toggleCards =(cardname)=>{
        if(cardname==='account'){
            showMyccount(!myaccount)
            showMyCart(false)

        }else if(cardname==='cart'){
            showMyCart(!mycart)
            showMyccount(false)

        }
    }
    return (
        <>
         <div className='header-row-mobile'>
        
              <div className='logo'>
                   <FaShopware/>  <Link to="/">MeShop  </Link>
                </div>

                <div className='cart' onClick={()=>toggleCards("cart")}>
                <FaShoppingCart/>
                </div>
                <div className='account-info' onClick={()=>toggleCards("account")}>
                    <FaUserCircle/>
                </div>
                <div className='search'><input type="text" placeholder="Search by Product Name, Supplier, Price, Supplier Location ...."></input>
                <FaSearch className='search-icon'/>
                </div>
              
        </div>
        <div className='header-row'>
                <div className='logo'>
                <FaShopware/>  <Link to="/">MeShop  </Link>
                </div>
                <div className='search'><input type="text" placeholder="Search by Product Name, Supplier, Price, Supplier Location ...."></input>
                <FaSearch className='search-icon'/>
                </div>
                <div className='cart' onClick={()=>toggleCards("cart")}>
                <FaShoppingCart/>
                </div>
                <div className='account-info' onClick={()=>toggleCards("account")}>
                    <FaUserCircle/>
                </div>
              
        </div>
        {myaccount?<div className='my-account'></div>:''}
        {mycart?<div className='my-cart-list'></div>:''}

        </>  
    )
}

export default TobBar