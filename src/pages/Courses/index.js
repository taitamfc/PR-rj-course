import React, { useState, useEffect } from 'react';
import ElmCourse from '../../components/ElmCourse';
function Courses() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/courses")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setIsLoaded(true);

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div
            className="card rounded-xxl p-lg--5 border-0 bg-no-repeat"
            style={{ backgroundColor: "#e4f7fe" }}
          >
            <div className="card-body w-100 p-4">
              <div className="form-group mt-3 p-3 border-light border p-2 bg-white rounded-lg">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="form-group icon-input mb-0">
                      <i className="ti-search font-xs text-grey-400" />
                      <input
                        type="text"
                        className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500 bg-transparent"
                        placeholder="Search online courses.."
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
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
                  <div className="col-lg-3">
                    <a
                      href="#"
                      className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase "
                    >
                      Search
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24">
                {" "}
                <b className="text-grey-800 text-dark">Popular Search :</b> Designer,
                Developer, PHP, HTML, CSS, SCSS{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-12 pt-2 mb-4">
          <h2 className="fw-400 font-lg">
            Search <b>Results</b>{" "}
            <span className="fw-500 ml-2 text-grey-500 font-xssss">
              ( 23 course is found )
            </span>{" "}
            <a href="#" className="float-right">
              <i className="feather-edit text-grey-500 font-xs" />
            </a>
          </h2>
        </div>

        {
          isLoaded && items.map((item,index)=>{
              return <ElmCourse key={index} course={item} type="default"/>
          })
        }
      </div>

    </>
  );
}

export default Courses;
