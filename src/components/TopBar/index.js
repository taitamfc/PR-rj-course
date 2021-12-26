import TopSearch from "../TopSearch";
function TopBar() {
    return (
        <>
            <div className="middle-sidebar-header bg-white">
                <TopSearch/>
                <ul className="d-flex ml-auto right-menu-icon">
                    <li>
                        <a href="#">
                            <span className="dot-count bg-warning" />
                            <i className="feather-bell font-xl text-current" />
                            <div className="menu-dropdown">
                                <h4 className="fw-700 font-xs mb-4">Notification</h4>
                                <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                                    <img
                                        src="http://uitheme.net/elomoas/images/user-8.png"
                                        alt="user"
                                        className="w40 position-absolute left-0"
                                    />
                                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                                        Hendrix Stamp{" "}
                                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                                            {" "}
                                            3 min
                                        </span>
                                    </h5>
                                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                                        There are many variations of pass..
                                    </h6>
                                </div>
                                <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                                    <img
                                        src="http://uitheme.net/elomoas/images/user-4.png"
                                        alt="user"
                                        className="w40 position-absolute left-0"
                                    />
                                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                                        Goria Coast{" "}
                                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                                            {" "}
                                            2 min
                                        </span>
                                    </h5>
                                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                                        Mobile Apps UI Designer is require..
                                    </h6>
                                </div>
                                <div className="card bg-transparent-card w-100 border-0 pl-5 mb-3">
                                    <img
                                        src="http://uitheme.net/elomoas/images/user-7.png"
                                        alt="user"
                                        className="w40 position-absolute left-0"
                                    />
                                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                                        Surfiya Zakir{" "}
                                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                                            {" "}
                                            1 min
                                        </span>
                                    </h5>
                                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                                        Mobile Apps UI Designer is require..
                                    </h6>
                                </div>
                                <div className="card bg-transparent-card w-100 border-0 pl-5">
                                    <img
                                        src="http://uitheme.net/elomoas/images/user-6.png"
                                        alt="user"
                                        className="w40 position-absolute left-0"
                                    />
                                    <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
                                        Victor Exrixon{" "}
                                        <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                                            {" "}
                                            30 sec
                                        </span>
                                    </h5>
                                    <h6 className="text-grey-500 fw-500 font-xssss lh-4">
                                        Mobile Apps UI Designer is require..
                                    </h6>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="message.html">
                            <i className="feather-message-square font-xl text-current" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="feather-settings animation-spin d-inline-block font-xl text-current" />
                            <div className="menu-dropdown switchcolor-wrap">
                                <h4 className="fw-700 font-xs mb-4">Settings</h4>
                                <h6 className="font-xssss text-grey-500 fw-700 mb-3 d-block">
                                    Choose Color Theme
                                </h6>
                                <ul>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input
                                                type="radio"
                                                name="color-radio"
                                                defaultValue="red"
                                                defaultChecked
                                            />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-red"
                                                style={{ backgroundColor: "#ff3b30" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input type="radio" name="color-radio" defaultValue="green" />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-green"
                                                style={{ backgroundColor: "#4cd964" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input
                                                type="radio"
                                                name="color-radio"
                                                defaultValue="blue"
                                                defaultChecked
                                            />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-blue"
                                                style={{ backgroundColor: "#132977" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input type="radio" name="color-radio" defaultValue="pink" />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-pink"
                                                style={{ backgroundColor: "#ff2d55" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input
                                                type="radio"
                                                name="color-radio"
                                                defaultValue="yellow"
                                            />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-yellow"
                                                style={{ backgroundColor: "#ffcc00" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input
                                                type="radio"
                                                name="color-radio"
                                                defaultValue="orange"
                                            />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-orange"
                                                style={{ backgroundColor: "#ff9500" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input type="radio" name="color-radio" defaultValue="gray" />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-gray"
                                                style={{ backgroundColor: "#8e8e93" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input type="radio" name="color-radio" defaultValue="brown" />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-brown"
                                                style={{ backgroundColor: "#D2691E" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input
                                                type="radio"
                                                name="color-radio"
                                                defaultValue="darkgreen"
                                            />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-darkgreen"
                                                style={{ backgroundColor: "#228B22" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input
                                                type="radio"
                                                name="color-radio"
                                                defaultValue="deeppink"
                                            />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-deeppink"
                                                style={{ backgroundColor: "#FFC0CB" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0">
                                        <label className="item-radio item-content">
                                            <input
                                                type="radio"
                                                name="color-radio"
                                                defaultValue="cadetblue"
                                            />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-cadetblue"
                                                style={{ backgroundColor: "#5f9ea0" }}
                                            />
                                        </label>
                                    </li>
                                    <li className="ml-0 d-inline-block">
                                        <label className="item-radio item-content">
                                            <input
                                                type="radio"
                                                name="color-radio"
                                                defaultValue="darkorchid"
                                            />
                                            <i className="ti-check" />
                                            <span
                                                className="circle-color bg-darkorchid"
                                                style={{ backgroundColor: "#9932cc" }}
                                            />
                                        </label>
                                    </li>
                                </ul>
                                <div className="card bg-transparent-card border-0 d-block mt-3">
                                    <h4 className="d-inline font-xssss mont-font fw-700">
                                        Header Background
                                    </h4>
                                    <div className="d-inline float-right mt-1">
                                        <label className="toggle toggle-menu-color">
                                            <input type="checkbox" />
                                            <span className="toggle-icon" />
                                        </label>
                                    </div>
                                </div>
                                <div className="card bg-transparent-card border-0 d-block mt-3">
                                    <h4 className="d-inline font-xssss mont-font fw-700">
                                        Sticky Header
                                    </h4>
                                    <div className="d-inline float-right mt-1">
                                        <label className="toggle toggle-sticky">
                                            <input type="checkbox" />
                                            <span className="toggle-icon" />
                                        </label>
                                    </div>
                                </div>
                                <div className="card bg-transparent-card border-0 d-block mt-3">
                                    <h4 className="d-inline font-xssss mont-font fw-700">
                                        Full Screen
                                    </h4>
                                    <div className="d-inline float-right mt-1">
                                        <label className="toggle toggle-screen">
                                            <input type="checkbox" />
                                            <span className="toggle-icon" />
                                        </label>
                                    </div>
                                </div>
                                <div className="card bg-transparent-card border-0 d-block mt-3">
                                    <h4 className="d-inline font-xssss mont-font fw-700">
                                        Menu Position
                                    </h4>
                                    <div className="d-inline float-right mt-1">
                                        <label className="toggle toggle-menu">
                                            <input type="checkbox" />
                                            <span className="toggle-icon" />
                                        </label>
                                    </div>
                                </div>
                                <div className="card bg-transparent-card border-0 d-block mt-3">
                                    <h4 className="d-inline font-xssss mont-font fw-700">
                                        Dark Mode
                                    </h4>
                                    <div className="d-inline float-right mt-1">
                                        <label className="toggle toggle-dark">
                                            <input type="checkbox" />
                                            <span className="toggle-icon" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="default-user-profile.html">
                            <img
                                src="http://uitheme.net/elomoas/images/female-profile.png"
                                alt="user"
                                className="w40 mt--1"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="menu-search-icon">
                            <i className="feather-search text-grey-900 font-lg" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default TopBar;
