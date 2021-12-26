function HomeSearch() {
    return (
        <>
            <div className="col-lg-12 mb-3">
                <div
                    className="card rounded-xxl p-lg--5 border-0 bg-no-repeat bg-image-contain banner-wrap"
                    style={{
                        backgroundImage:
                            "url(http://uitheme.net/elomoas/images/fogg-clip.png)"
                    }}
                >
                    <div className="card-body p-4">
                        <h2 className="display3-size fw-400 display2-md-size sm-mt-7 sm-pt-10">
                            Find a perfect <b className="d-lg-block">Online Course</b>
                        </h2>
                        <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                            For only course you need to learn web development
                        </h4>
                        <div className="form-group mt-lg-4 p-3 border-light border p-2 bg-white rounded-lg ">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="form-group icon-input mb-0">
                                        <i className="ti-search font-xs text-grey-400" />
                                        <input
                                            type="text"
                                            className="style1-input bg-transparent border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500"
                                            placeholder="Search online courses.."
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group icon-input mb-0">
                                        <i className="ti-package font-xs text-grey-400" />
                                        <select className="style1-select bg-transparent border-0 pl-5">
                                            <option value="Bootstrap">Bootstrap</option>
                                            <option value="HTML">HTML</option>
                                            <option value="Jquery">Jquery</option>
                                            <option value="Sass">Sass</option>
                                            <option value="React">React</option>
                                            <option value="JAVA">JAVA</option>
                                            <option value="Python">Python</option>
                                            <option value="Mongodb">Mongodb</option>
                                            <option value="Desinger">Desinger</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <a
                                        href="default-search.html"
                                        className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                                    >
                                        Search
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                            {" "}
                            <b className="text-grey-800 text-dark">Popular Search :</b>{" "}
                            Designer, Developer, PHP, HTML, CSS, SCSS{" "}
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSearch;
