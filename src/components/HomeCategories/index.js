import OwlCarousel from 'react-owl-carousel';
function HomeCategories() {
    return (
        <>
            <div className="col-lg-12 pt-4">
                <h2 className="fw-400 font-lg">
                    Explore <b>Categories</b>{" "}
                    <a href="#" className="float-right">
                        <i className="feather-edit text-grey-500 font-xs" />
                    </a>
                </h2>
            </div>
            <div className="col-lg-12 mt-3">
                <OwlCarousel
                    className='owl-carousel category-card owl-theme overflow-hidden overflow-visible-xl nav-none'
                    loop={false} margin={10} nav={true} dots={false} autoWidth={true}>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#fcf1eb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download1.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        Bootstrap{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#fff9eb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download2.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        HTML{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#e5f4fb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download3.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        Jquery{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#dcf4f8" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download4.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        Sass{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#fcf1eb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download5.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        React{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#fff9eb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download6.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        JAVA{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#e5f4fb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download7.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        Python
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#fcf1eb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/mongodb.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        Mongodb{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#fcf1eb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download1.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        Desinger{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div
                            className="card cat-card-hover mr-1 w140 border-0 p-4 rounded-lg text-center"
                            style={{ backgroundColor: "#fff9eb" }}
                        >
                            <a href="default-channel.html">
                                <div className="card-body p-2 ml-1 ">
                                    <span className="btn-round-xl bg-white">
                                        <img
                                            src="http://uitheme.net/elomoas/images/download2.png"
                                            alt="icon"
                                            className="p-2"
                                        />
                                    </span>
                                    <h4 className="fw-600 font-xsss mt-3 mb-0">
                                        Desinger{" "}
                                        <span className="d-block font-xsssss fw-500 text-grey-500 mt-2">
                                            32 Course
                                        </span>
                                    </h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </>
    );
}

export default HomeCategories;
