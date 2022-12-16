import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import HeaderSlider from './HeaderSlider'
import smart_watch from '../images/product_group_1/smartwatch2.webp'
import product_group_1 from '../images/product_group_1/tv.webp'
import tv6 from '../images/product_group_1/tv6.webp'
import smartwatch2 from '../images/product_group_1/smartwatch2.webp'
import product_group_3 from '../images/product_group_1/banner1.webp'
import product_group_5 from '../images/product_group_1/mobile9.webp'
import smartwatch from '../images/product_group_1/smartwatch.webp'
import laptop2 from '../images/product_group_1/laptop2.webp'

import shoe from '../images/product_group_1/shoe.webp'
import shoe2 from '../images/product_group_1/shoe2.webp'
import shoe3 from '../images/product_group_1/shoe3.webp'
import shoe4 from '../images/product_group_1/shoe4.webp'


import bag from '../images/product_group_1/bag.webp'
import bag2 from '../images/product_group_1/bag2.webp'
import bag3 from '../images/product_group_1/bag3.webp'
import bag4 from '../images/product_group_1/bag4.webp'

import React from "react"


const MainBody = () =>{
    return (
        <>
            <div className="slider">
                <HeaderSlider />
              
            </div>
            <div className='my-cart'></div>
            <div className="higlighted-products-1">
                    <div className="product">
                        <div className="product-1">
                        <img alt="" className = 'product-card-img' src={product_group_3}/>

                            {/* <img src {} className = 'product-card-img'></img> */}
                        </div>
                  
                    </div> 
                    <div className="product">
                        <div className="product-2">
                        <img alt=""  className = 'product-card-img' src={smartwatch2}/>
                        {/* <img src {} className = 'product-card-img'></img> */}
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-3">
                        <img alt=""  className = 'product-card-img' src={smartwatch}/>
                        {/* <img src {} className = 'product-card-img'></img> */}
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-4">
                        <img alt=""  className = 'product-card-img' src={product_group_5}/>
                        </div>
                    </div>
                    
            </div>

            <div className="breaker-card">
            </div>

            <div className="higlighted-products-2">
            <div className="product">
                    <img alt=""  className = 'product-card-img' src={bag}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={bag2}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={bag3}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={bag4}/>
                    </div>

                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={smart_watch}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={tv6}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={laptop2}/>
                    </div>

                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={shoe}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={shoe2}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={shoe3}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={shoe4}/>
                    </div>
            </div>
           

            <div className="body-sign-in">
            <b>See personalized recommendations</b>
            <Button variant="contained">Sign In</Button>
            <b>New customer? <Link to='/create-account'>Start here.</Link></b>
            </div>
        </>
    )
}

export default MainBody