function Course() {
  return (
    <>
      <div className="row">
        <div className="col-xl-8 col-xxl-9">
          <div className="card border-0 mb-0 rounded-lg overflow-hidden">
            <div className="player shadow-none">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/w6Lu4c1JUtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="card d-block border-0 rounded-lg overflow-hidden dark-bg-transparent bg-transparent mt-4 pb-3">
            <div className="row">
              <div className="col-10">
                <h2 className="fw-700 font-md d-block lh-4 mb-2">
                  Microsoft Access Development, Design and Advanced Methods Workshop
                  Tutorial
                </h2>
              </div>
              <div className="col-2">
                <a
                  href="#"
                  className="btn-round-md ml-3 d-inline-block float-right rounded-lg bg-danger"
                >
                  <i className="feather-bookmark font-sm text-white" />
                </a>
                <a
                  href="#"
                  className="btn-round-md ml-0 d-inline-block float-right rounded-lg bg-greylight"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="feather-share-2 font-sm text-grey-700" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right p-3 border-0 shadow-xss"
                  aria-labelledby="dropdownMenu2"
                >
                  <ul className="d-flex align-items-center mt-0 float-left">
                    <li className="mr-2">
                      <h4 className="fw-600 font-xss text-grey-900  mt-2 mr-3">
                        Share:{" "}
                      </h4>
                    </li>
                    <li className="mr-2">
                      <a href="#" className="btn-round-md bg-facebook">
                        <i className="font-xs ti-facebook text-white" />
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href="#" className="btn-round-md bg-twiiter">
                        <i className="font-xs ti-twitter-alt text-white" />
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href="#" className="btn-round-md bg-linkedin">
                        <i className="font-xs ti-linkedin text-white" />
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href="#" className="btn-round-md bg-instagram">
                        <i className="font-xs ti-instagram text-white" />
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href="#" className="btn-round-md bg-pinterest">
                        <i className="font-xs ti-pinterest text-white" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <span className="font-xssss fw-700 text-grey-900 d-inline-block ml-0 text-dark">
              Cassica Vanni
            </span>
            <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey" />
            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
              Developer
            </span>
            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
              Design
            </span>
            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
              Developer
            </span>
            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
              HTML5
            </span>
            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">
              Jquery
            </span>
            <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey" />
            <span className="font-xssss fw-700 text-primary d-inline-block ml-0 ">
              Follow Author
            </span>
          </div>
          <div className="card d-block border-0 rounded-lg overflow-hidden mt-2">
            <div id="accordion" className="accordion mb-0">
              <div className="card shadow-xss mb-0">
                <div
                  className="card-header bg-greylight theme-dark-bg"
                  id="headingOne"
                >
                  <h5 className="mb-0">
                    <button
                      className="btn font-xsss fw-600 btn-link "
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      Development to the Course{" "}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  className="collapse p-3 show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      1
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Introduction to the course
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      12:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      2
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      3
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                </div>
              </div>
              <div className="card shadow-xss mb-0">
                <div
                  className="card-header bg-greylight theme-dark-bg"
                  id="headingTwo4"
                >
                  <h5 className="mb-0">
                    <button
                      className="btn font-xsss fw-600 btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {" "}
                      Creating a sliding down menu{" "}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse p-3"
                  aria-labelledby="headingTwo4"
                  data-parent="#accordion"
                >
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      1
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Introduction to the course
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      12:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      2
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      3
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      4
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                </div>
              </div>
              <div className="card shadow-xss mb-0">
                <div
                  className="card-header bg-greylight theme-dark-bg"
                  id="headingTwo2"
                >
                  <h5 className="mb-0">
                    <button
                      className="btn font-xsss fw-600 btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      {" "}
                      People chart infographics Animation{" "}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse p-3"
                  aria-labelledby="headingTwo2"
                  data-parent="#accordion"
                >
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      1
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Introduction to the course
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      12:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      2
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      3
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      4
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                </div>
              </div>
              <div className="card shadow-xss mb-0">
                <div
                  className="card-header bg-greylight theme-dark-bg"
                  id="headingTwo"
                >
                  <h5 className="mb-0">
                    <button
                      className="btn font-xsss fw-600 btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      {" "}
                      Creating a clock animation with rotation property of shapes
                    </button>
                  </h5>
                </div>
                <div
                  id="collapsefour"
                  className="collapse p-3"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      1
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Introduction to the course
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      12:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      2
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      3
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                  <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                      4
                    </span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">
                      Watch the videos in HD mode only
                    </span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">
                      10:34
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 alert-success">
            <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 text-success mb-4">
              What you'll learn from this lesson
            </h2>
            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
              <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5" />
              Create awesome animated splash screens for any Excel project such as
              animation with password access to a work book, loading animation.
            </h4>
            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
              <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5" />
              After completing this course you'll be confident to create any subtle to
              complex animation that will turn any project a professional work and
              surely you'll become an awesome developer and designer
            </h4>
            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
              <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5" />
              Create awesome animated splash screens for any Excel project such as
              animation with password access to a work book, loading animation.
            </h4>
            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
              <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5" />
              After completing this course you'll be confident to create any subtle to
              complex animation that will turn any project a professional work and
              surely you'll become an awesome developer and designer
            </h4>
            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
              <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5" />
              Create awesome animated splash screens for any Excel project such as
              animation with password access to a work book, loading animation.
            </h4>
            <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
              <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5" />
              After completing this course you'll be confident to create any subtle to
              complex animation that will turn any project a professional work and
              surely you'll become an awesome developer and designer
            </h4>
          </div>
          <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4">
            <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">Description</h2>
            <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
              After creating more than a dozen courses on Microsoft Access databases
              and programming in VBA, many students have contacted me with discussions
              on specific problems and scenarios. From these discussions, I have
              created videos reviewing the details of the most useful techniques that
              everyone will eventually need. I have made sure that every detail of
              these techniques is recorded in the videos! BUT you should be somewhat
              familiar with VBA since there are lots of coding examples in the course.{" "}
              <br /> There are MANY tips and tricks in this workshop that you will not
              find an ANY of my other courses! <br /> I also include a specific
              database design challenge from a student and then go over the details of
              how I would handle it. <br /> If you are willing to take the time to go
              through this course you could easily be much more productive with
              Microsoft Access in just a few hours!{" "}
            </p>
          </div>
          <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 mb-5">
            <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">Requirements</h2>
            <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
              After creating more than a dozen courses on Microsoft Access databases
              and programming in VBA, many students have contacted me with discussions
              on specific problems and scenarios. From these discussions,
            </p>
            <ul className="list-style-disc pl-4 mt-3">
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  move around shapes in Excel with codes,
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  rotate shapes,
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  understand 3D rotations in X, Y, Z axis
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  Morphing of shapes
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  create amazing animated splash screens to create first impression
                  when a user clicks open your Excel workbook. Its a winning trick
                  you'd always use once you learn
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  create loading screens like seen on web pages /&nbsp; mobile apps in
                  your Excel workbooks
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  create animated password access splash screen system to your Excel
                  workbooks.{" "}
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  learn different styles of animated menus like slide out menus, slide
                  down menus, scaling menus, toggle button animated menus
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  loop animations
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  chart animation / graph animation in Excel
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  Learn text animation, that you'll always use in all simple to big
                  Excel projects. Because it's insanely easy and useful!
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  learn to apply various animations in all kinds of
                  dashboards/reports/simple information workbook
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  learn awesome button animations for that great user experience every
                  time someone interacts with your dashboards/reports/projects
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  creative mouse hover animation for all projects
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  various transitions and effect animations
                </p>
              </li>
              <li>
                <p className="font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2">
                  learn all properties of shapes such as transparency, blur, Scale
                  height/width, glow, color to achieve amazing animation effects that
                  can be applied to any project.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-xxl-3">
          <div className="card p-4 mb-4 bg-primary border-0 shadow-xss rounded-lg">
            <div className="card-body">
              <h2 className="text-white font-xsssss fw-700 text-uppercase ls-3 ">
                Starter
              </h2>
              <h1 className="display2-size text-white fw-700">€ 49</h1>
              <h4 className="text-white fw-500 mb-4 lh-24 font-xssss">
                For anyone validating Framer as a professional prototyping tool.
              </h4>
              <h4 className="text-white font-xssss mb-2">
                <i className="ti-check mr-2 text-white" /> Unlimited views
              </h4>
              <h4 className="text-white font-xssss mb-2">
                <i className="ti-check mr-2 text-white" /> Everything in Free
              </h4>
              <h4 className="text-white font-xssss mb-4">
                <i className="ti-check mr-2 text-white" /> Private share links
              </h4>
              <a
                href="#"
                className="btn btn-block border-0 w-100 bg-white p-3 text-primary fw-600 rounded-lg d-inline-block font-xssss btn-light"
              >
                Subscribe
              </a>
            </div>
          </div>
          <div className="card w-100 border-0 mt-0 mb-4 p-4 shadow-xss position-relative rounded-lg bg-white">
            <div className="row">
              <div className="col-5 pr-0">
                <h2 className="display3-size lh-1 m-0 text-grey-900 fw-700">4.2</h2>
              </div>
              <div className="col-7 pl-0 text-right">
                <div className="star d-block w-100 text-right">
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                  <img src="http://uitheme.net/elomoas/images/star-disable.png" alt="star" className="w10" />
                </div>
                <h4 className="font-xsssss text-grey-600 fw-600 mt-1">
                  Based on 433 rating
                </h4>
              </div>
            </div>
            <div className="bg-greylight theme-dark-bg rounded-sm p-2 mt-3 mb-4">
              <div className="row mt-3">
                <div className="col-3 pr-1 mt-0">
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10 float-left" />
                  <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                    5
                  </h4>
                </div>
                <div className="col-7 pl-0 pr-2">
                  <div id="bar_1" data-value={45} className="bar-container">
                    <div className="bar-percentage" style={{ width: "70%" }} />
                  </div>
                </div>
                <div className="col-2 pl-0">
                  <h4 className="font-xssss fw-600 text-grey-800">70%</h4>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-3 pr-1 mt-0">
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10 float-left" />
                  <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                    4
                  </h4>
                </div>
                <div className="col-7 pl-0 pr-2">
                  <div id="bar_2" data-value={45} className="bar-container">
                    <div className="bar-percentage" style={{ width: "50%" }} />
                  </div>
                </div>
                <div className="col-2 pl-0">
                  <h4 className="font-xssss fw-600 text-grey-800">50%</h4>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-3 pr-1 mt-0">
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10 float-left" />
                  <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                    3
                  </h4>
                </div>
                <div className="col-7 pl-0 pr-2">
                  <div id="bar_3" data-value={45} className="bar-container">
                    <div className="bar-percentage" style={{ width: "40%" }} />
                  </div>
                </div>
                <div className="col-2 pl-0">
                  <h4 className="font-xssss fw-600 text-grey-800">40%</h4>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-3 pr-1 mt-0">
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10 float-left" />
                  <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                    2
                  </h4>
                </div>
                <div className="col-7 pl-0 pr-2">
                  <div id="bar_4" data-value={45} className="bar-container">
                    <div className="bar-percentage" style={{ width: "30%" }} />
                  </div>
                </div>
                <div className="col-2 pl-0">
                  <h4 className="font-xssss fw-600 text-grey-800">30%</h4>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-3 pr-1 mt-0">
                  <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10 float-left" />
                  <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">
                    1
                  </h4>
                </div>
                <div className="col-7 pl-0 pr-2">
                  <div id="bar_5" data-value={45} className="bar-container">
                    <div className="bar-percentage" style={{ width: "20%" }} />
                  </div>
                </div>
                <div className="col-2 pl-0">
                  <h4 className="font-xssss fw-600 text-grey-800">20%</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-left">
                <figure className="avatar float-left mb-0">
                  <img
                    src="http://uitheme.net/elomoas/images/user-7.png"
                    alt="image"
                    className="float-right shadow-none w40 mr-2"
                  />
                </figure>
              </div>
              <div className="col-10 pl-4">
                <div className="content">
                  <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                    Goria Coast
                  </h6>
                  <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                    July 26 at 8:20 PM
                  </h6>
                  <div className="star d-block w-100 text-left">
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star-disable.png" alt="star" className="w10" />
                  </div>
                  <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                    Enjoyed this a lot and well done. We are an early stage digitally
                    native vertical brand, making travel bags.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-left">
                <figure className="avatar float-left mb-0">
                  <img
                    src="http://uitheme.net/elomoas/images/user-6.png"
                    alt="image"
                    className="float-right shadow-none w40 mr-2"
                  />
                </figure>
              </div>
              <div className="col-10 pl-4">
                <div className="content">
                  <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                    Goria Coast
                  </h6>
                  <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                    July 26 at 8:20 PM
                  </h6>
                  <div className="star d-block w-100 text-left">
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star-disable.png" alt="star" className="w10" />
                  </div>
                  <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                    Enjoyed this a lot and well done. We are an early stage digitally
                    native vertical brand, making travel bags.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-left">
                <figure className="avatar float-left mb-0">
                  <img
                    src="http://uitheme.net/elomoas/images/user-5.png"
                    alt="image"
                    className="float-right shadow-none w40 mr-2"
                  />
                </figure>
              </div>
              <div className="col-10 pl-4">
                <div className="content">
                  <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                    Goria Coast
                  </h6>
                  <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                    July 26 at 8:20 PM
                  </h6>
                  <div className="star d-block w-100 text-left">
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star-disable.png" alt="star" className="w10" />
                  </div>
                  <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                    Enjoyed this a lot and well done. We are an early stage digitally
                    native vertical brand, making travel bags.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-left">
                <figure className="avatar float-left mb-0">
                  <img
                    src="http://uitheme.net/elomoas/images/user-3.png"
                    alt="image"
                    className="float-right shadow-none w40 mr-2"
                  />
                </figure>
              </div>
              <div className="col-10 pl-4">
                <div className="content">
                  <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                    Goria Coast
                  </h6>
                  <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                    July 26 at 8:20 PM
                  </h6>
                  <div className="star d-block w-100 text-left">
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star.png" alt="star" className="w10" />
                    <img src="http://uitheme.net/elomoas/images/star-disable.png" alt="star" className="w10" />
                  </div>
                  <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                    Enjoyed this a lot and well done. We are an early stage digitally
                    native vertical brand, making travel bags.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <a
                href="#"
                className="d-block p-2 lh-32 w-100 text-center ml-3 mr-3 bg-greylight fw-600 font-xssss text-grey-900"
              >
                Add a Review
              </a>
            </div>
          </div>
          <div className="card shadow-xss rounded-lg border-0 p-4 mb-4">
            <h4 className="font-xs fw-700 text-grey-900 d-block mb-3">
              Modul{" "}
              <a href="#" className="float-right">
                <i className="ti-arrow-circle-right text-grey-500 font-xss" />
              </a>
            </h4>
            <div className="card-body d-flex p-0">
              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                1
              </span>
              <span className="font-xssss fw-500 text-grey-500 ml-2">
                Introduction
              </span>
              <span className="ml-auto font-xssss fw-500 text-grey-500">12:34</span>
            </div>
            <div className="card-body d-flex p-0 mt-3">
              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                2
              </span>
              <span className="font-xssss fw-500 text-grey-500 ml-2">
                Watch the videos
              </span>
              <span className="ml-auto font-xssss fw-500 text-grey-500">22:34</span>
            </div>
            <div className="card-body d-flex p-0 mt-3">
              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                3
              </span>
              <span className="font-xssss fw-500 text-grey-500 ml-2">
                {" "}
                Creating a sliding
              </span>
              <span className="ml-auto font-xssss fw-500 text-grey-500">34:34</span>
            </div>
            <div className="card-body d-flex p-0 mt-3">
              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                4
              </span>
              <span className="font-xssss fw-500 text-grey-500 ml-2">
                Make a Dropdown
              </span>
              <span className="ml-auto font-xssss fw-500 text-grey-500">40:34</span>
            </div>
            <div className="card-body d-flex p-0 mt-3">
              <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">
                5
              </span>
              <span className="font-xssss fw-500 text-grey-500 ml-2">Conclusion</span>
              <span className="ml-auto font-xssss fw-500 text-grey-500">2:34</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
