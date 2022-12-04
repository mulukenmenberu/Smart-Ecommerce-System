import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import HeaderSlider from './HeaderSlider'
// import banner from '../images/banner/banner-2.jpeg'
import product_group_1 from '../images/product_group_1/product-group-1.jpg'
// import product_group_2 from '../images/product_group_1/product_group_2.jpg'
import product_group_3 from '../images/product_group_1/watch.jpg'
import product_group_5 from '../images/product_group_1/product-image-5.jpg'
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
                        <img alt=""  className = 'product-card-img' src={product_group_3}/>
                        {/* <img src {} className = 'product-card-img'></img> */}
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-3">
                        <img alt=""  className = 'product-card-img' src={product_group_3}/>
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
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
                    </div>

                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
                    </div>
                    <div className="product">
                    <img alt=""  className = 'product-card-img' src={product_group_1}/>
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