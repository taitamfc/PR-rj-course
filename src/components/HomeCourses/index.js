import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';

import ElmCourse from "../ElmCourse";
function HomeCourses({ title,courses }) {
    /*
    loop:false,
    margin:10,
    nav:true,
    autoplay:false,  
    dots:false,
    navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    autoWidth:true
    */
    return (
        <>
            <div className="col-lg-12 pt-4 mb-3">
                <h2 className="fw-400 font-lg d-block">
                    <b> {title}</b>
                    <a href="#" className="float-right">
                        <i className="feather-edit text-grey-500 font-xs" />
                    </a>
                </h2>
            </div>
            <div className="col-lg-12 pt-2">
                <OwlCarousel 
                className='owl-carousel category-card owl-theme overflow-hidden overflow-visible-xl nav-none' 
                loop={false} margin={10} nav={true} dots={false} autoWidth={true}>
                    {
                        courses.map((item,index)=>{
                            return <ElmCourse key={index} course={item} type="owl" />
                        })
                    }
                </OwlCarousel>
            </div>
        </>
    );
}

export default HomeCourses;
