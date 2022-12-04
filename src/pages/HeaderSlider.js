import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import slider_1 from '../images/slider/slider_1.jpg'
import slider_2 from '../images/slider/slider_2.jpg'
import slider_3 from '../images/slider/slider_3.jpg'
import slider_4 from '../images/slider/slider_4.jpg'
const HeaderSlider =()=>{
    const [slideIndex, setSlideIndex] = useState(0)
    const slideList = [slider_1, slider_2, slider_3, slider_4]
    const sliderContent = {
        width: "100%",
        height:"100%",
        marginTop:"17px",
        borderRadius:"10px",
        backgroundPosition: "top 50px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${slideList[slideIndex]})`

    }
    const slideBack =()=>{
            const index = slideIndex ===0? slideList.length-1 : slideIndex-1
            setSlideIndex(index)
    }
    const slideFront =()=>{
            const index = slideIndex === slideList.length-1? 0 : slideIndex+1
            setSlideIndex(index)
    }
    useEffect(() => {
       setTimeout(() => {
        slideFront()
       }, 3000);

       }, [slideIndex])
    return (
        <>
            <div style={sliderContent} className="slidHolder">
            <div className="left-arrow" onClick={slideBack}><FaArrowAltCircleLeft/></div>
            <div className="right-arrow" onClick={slideFront}><FaArrowAltCircleRight/></div>
            </div>
        </>
    )

}

export default HeaderSlider;