import React from "react"
import { useParams } from "react-router-dom";
import {BsStarHalf, BsStarFill } from 'react-icons/bs'
const Products = ()=>{
   const {id} =  useParams()

    return (
        <div className="product-page">
<div className="product-left-menu">
    <ul>
        <li>sdsds</li>
        <li>sdsds</li>
        <li>sdsds</li>
        <li>sdsds</li>
        <li>sdsds</li>
        <li>sdsds</li>
        <li>sdsds</li>
        <li>sdsds</li>
     
    </ul>
</div>
<div className="product-content">
    <h3>Product Title {id}</h3>
    <div className="search-result">
        1-10 of 12467 results
    </div>
  <div className="product-content-container">
    <div className="product-content-item">
        <div className="product-tag">
        Nintendo Switch – OLED Model w/ White Joy-Con<b> By: Mule</b>
        <br></br>
        <BsStarFill className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/><BsStarHalf  className="star-rating"/> 11,520
        </div>
    </div>
    <div className="product-content-item">
        <div className="product-tag">
        Nintendo Switch – OLED Model w/ White Joy-Con<b> By: Mule</b>
        <br></br>
        <BsStarFill className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/><BsStarHalf  className="star-rating"/> 11,520
        </div>
    </div>
    <div className="product-content-item">
        <div className="product-tag">
        Nintendo Switch – OLED Model w/ White Joy-Con<b> By: Mule</b>
        <br></br>
        <BsStarFill className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/><BsStarHalf  className="star-rating"/> 11,520
        </div>
    </div>
    <div className="product-content-item">
        <div className="product-tag">
        Nintendo Switch – OLED Model w/ White Joy-Con<b> By: Mule</b>
        <br></br>
        <BsStarFill className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/><BsStarHalf  className="star-rating"/> 11,520
        </div>
    </div>
    <div className="product-content-item">
        <div className="product-tag">
        Nintendo Switch – OLED Model w/ White Joy-Con<b> By: Mule</b>
        <br></br>
        <BsStarFill className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/><BsStarHalf  className="star-rating"/> 11,520
        </div>
    </div>
    <div className="product-content-item">
        <div className="product-tag">
        Nintendo Switch – OLED Model w/ White Joy-Con<b> By: Mule</b>
        <br></br>
        <BsStarFill className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/><BsStarHalf  className="star-rating"/> 11,520
        </div>
    </div>
    <div className="product-content-item">
        <div className="product-tag">
        Nintendo Switch – OLED Model w/ White Joy-Con<b> By: Mule</b>
        <br></br>
        <BsStarFill className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/> <BsStarFill  className="star-rating"/><BsStarHalf  className="star-rating"/> 11,520
        </div>
    </div>

  </div>
</div>
        </div>
    )
}
export default Products