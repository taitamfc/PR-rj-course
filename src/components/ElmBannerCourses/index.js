import OwlCarousel from 'react-owl-carousel';
function ElmBannerCourses() {
    return (
        <>
            <div className="col-lg-12 mb-0">
                <OwlCarousel
                    className='owl-carousel course-slide owl-theme overflow-hidden dot-style2 owl-nav-link'
                    loop={true} margin={10} nav={true} dots={true} autoWidth={false} items={1}>
                    <div className="item">
                        <div className="card course-slider rounded-lg border-0 banner-wrap overflow-hidden">
                            <div className="video-wrap">
                                <img src="http://uitheme.net/elomoas/images/fogg-clip.png"></img>
                            </div>
                            <div className="card-body position-absolute align-items-center d-flex h-100">
                                <div className="card-content">
                                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1 mb-2">
                                        React
                                    </span>
                                    <h2 className="display1-size display1-sm-size fw-700 lh-3 text-white ">
                                        The Complete Guide React Vue Developer
                                    </h2>
                                    <p className="d-none d-xl-block font-xssss fw-500 text-grey-300 lh-30 mt-0 mr-5 mb-0">
                                        ultrices justo eget, sodales orci. Aliquam egestas libero ac
                                        turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem
                                        laoreet, feugiat tellus at, hendrerit arcu.
                                    </p>
                                    <div className="star d-block w-100 text-left mt-2">
                                        <img
                                            src="images/star.png"
                                            alt="star"
                                            className="w15 float-left"
                                        />
                                        <img
                                            src="images/star.png"
                                            alt="star"
                                            className="w15 float-left"
                                        />
                                        <img
                                            src="images/star.png"
                                            alt="star"
                                            className="w15 float-left"
                                        />
                                        <img
                                            src="images/star.png"
                                            alt="star"
                                            className="w15 float-left"
                                        />
                                        <img
                                            src="images/star-disable.png"
                                            alt="star"
                                            className="w15 float-left mr-2"
                                        />
                                    </div>
                                    <p className="review-link d-none d-lg-block font-xssss fw-600 text-grey-100 lh-3 mb-1">
                                        (456 ratings ) 2 customer review
                                    </p>
                                    <div className="clearfix" />
                                    <a
                                        href="#"
                                        className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200 mt-3"
                                    >
                                        Get Course
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="card course-slider rounded-lg border-0 banner-wrap overflow-hidden">
                            <div className="video-wrap">
                                <img src="http://uitheme.net/elomoas/images/fogg-clip.png"></img>
                            </div>
                            <div className="card-body position-absolute align-items-center d-flex h-100">
                                <div className="card-content">
                                    <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1 mb-2">
                                        React
                                    </span>
                                    <h2 className="display1-size display1-sm-size fw-700 lh-3 text-white ">
                                        The Complete Guide React Vue Developer
                                    </h2>
                                    <p className="d-none d-xl-block font-xssss fw-500 text-grey-300 lh-30 mt-0 mr-5 mb-0">
                                        ultrices justo eget, sodales orci. Aliquam egestas libero ac
                                        turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem
                                        laoreet, feugiat tellus at, hendrerit arcu.
                                    </p>
                                    <div className="star d-block w-100 text-left mt-2">
                                        <img
                                            src="images/star.png"
                                            alt="star"
                                            className="w15 float-left"
                                        />
                                        <img
                                            src="images/star.png"
                                            alt="star"
                                            className="w15 float-left"
                                        />
                                        <img
                                            src="images/star.png"
                                            alt="star"
                                            className="w15 float-left"
                                        />
                                        <img
                                            src="images/star.png"
                                            alt="star"
                                            className="w15 float-left"
                                        />
                                        <img
                                            src="images/star-disable.png"
                                            alt="star"
                                            className="w15 float-left mr-2"
                                        />
                                    </div>
                                    <p className="review-link d-none d-lg-block font-xssss fw-600 text-grey-100 lh-3 mb-1">
                                        (456 ratings ) 2 customer review
                                    </p>
                                    <div className="clearfix" />
                                    <a
                                        href="#"
                                        className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-lg d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200 mt-3"
                                    >
                                        Get Course
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>

        </>
    );
}

export default ElmBannerCourses;
