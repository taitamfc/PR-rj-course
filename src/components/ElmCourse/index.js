import { Link } from "react-router-dom";
function ElmCourse({ course,type }) {
    let the_class = '';
    let wrapper_class = '';
    switch (type) {
        case 'owl':
            wrapper_class = 'item';
            the_class = 'card course-card w300 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 mb-4';
            break;
        default:
            wrapper_class = 'col-xl-4 col-xxxl-3 col-lg-6 col-md-6 col-sm-6 mb-4';
            the_class = 'card course-card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1 ';
            break;
    }
    return (
        <>
            <div className={wrapper_class}>
                <div className={the_class}>
                    <div className="card-image w-100 mb-3">
                        <Link to={{ 'pathname': '/courses/' + course.slug }} className="video-bttn position-relative d-block">
                            <img
                                src={course.thumbnail_cdn}
                                alt="image"
                                className="w-100"
                            />
                        </Link>
                    </div>
                    <div className="card-body pt-0">
                        <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">
                            Python
                        </span>
                        <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                            Free
                        </span>
                        <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                            <Link to={{ 'pathname': '/courses/' + course.slug }}
                                className="text-dark text-grey-900"
                            >
                                {course.title}
                            </Link>
                        </h4>
                        <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2">
                            {" "}
                            32 Lesson{" "}
                        </h6>
                        <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                            <li className="w-auto">
                                <Link to={{ 'pathname': '/courses/' + course.slug }}
                                    className="fw-500 text-grey-500 font-xssss">
                                    {course.students_count} người đã học
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ElmCourse;
