import "./Slick.css";
import "./Slick-theme.css";
import React from "react";
import Slider from "react-slick";

import Sliderdata from '../Data/Sliderdata';
import './Section3.css';
import './mediaquery.css';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Sectionthree(){
    
    return(
        <div className="courses-slider-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mx-auto courses-slider-content-wrapper">
                            <h6 className='fw-semibold mb-0' style={{color:'#6b46ff',fontSize:'16px',lineHeight:'24px'}}>Industry's Top Courses</h6>
                            <h1 className='fw-semibold my-2' style={{color:'#212529',fontSize:'36px'}}>Courses</h1>
                            <p className='fw-normal mb-0' style={{color:'#475467',lineHeight:'30px'}}>Learning programming and technical things can be complex. We are here to make it easy with simple and interactive tutorials.</p>
                        </div>
                    </div>
                    <div className="slider-slide bg-white mt-lg-4 h-100" style={{marginBottom:'77px'}}>
                        <SimpleSlider/>   
                    </div>
                    <div className="text-center">
                      <button className="tf-btn">Explore All Courses</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function SimpleSlider() {
    let printData=Sliderdata.map((v)=>{
        return(<AllData aData={v} />)
    })
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
      {printData}
    </Slider>
  );
}

function AllData({aData}){
    // console.log(aData);
    return(
            <a href="" className="text-decoration-none">
                <div className="tutorial-freak-cards card text-start">
                    <img src={aData.img}  alt="" />
                    <h3 className="mb-3 card-title">{aData.title}</h3>
                    <p className="fw-normal mb-3 card-para">{aData.des}</p>
                    <div className="start-link d-flex align-items-center">Start Learning 
                        <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </div>
                </div>
            </a>
    )
}