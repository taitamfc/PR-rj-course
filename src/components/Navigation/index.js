import { Link,NavLink } from "react-router-dom";
function Navigation() {
    return (
        <>
            <nav className="navigation scroll-bar">
                <div className="container pl-0 pr-0">
                    <div className="nav-content">
                        <div className="nav-top">
                            <Link to="/">
                                <i className="feather-slack text-success display1-size mr-3 ml-3" />
                                <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">
                                    U Là Trời 74
                                </span>
                            </Link>
                            <Link to="/" className="close-nav d-inline-block d-lg-none">
                                <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2 " />
                            </Link>
                        </div>
                        <div className="nav-caption fw-600 font-xssss text-grey-500">
                            <span>New </span>Feeds
                        </div>
                        <ul className="mb-3">
                            <li className="logo d-none d-xl-block d-lg-block" />
                            <li>
                                <NavLink to="/"
                                    className="nav-content-bttn open-font"
                                    activeclassname='active'
                                >
                                    <i className="feather-tv mr-3" />
                                    <span>Trang Chủ</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="courses"
                                    className="nav-content-bttn open-font"
                                    activeclassname='active'
                                >
                                    <i className="feather-shopping-bag mr-3" />
                                    <span>Học</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="blogs"
                                    className="nav-content-bttn open-font"
                                    activeclassname='active'
                                >
                                    <i className="feather-globe mr-3" />
                                    <span>Blog</span>
                                </NavLink>
                            </li>

                        </ul>
                        <div className="nav-caption fw-600 font-xssss text-grey-500">
                            Học viên mới
                        </div>
                        <ul className="mb-3">
                            <li>
                                <a
                                    href="default-author-profile.html"
                                    className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                                    data-tab="chats"
                                >
                                    <img
                                        src="http://uitheme.net/elomoas/images/profile-4.png"
                                        alt="user"
                                        className="w40 mr-2"
                                    />
                                    <span>Surfiya Zakir </span>
                                    <span className="circle-icon bg-success mt-3" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="default-author-profile.html"
                                    className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                                    data-tab="chats"
                                >
                                    <img
                                        src="http://uitheme.net/elomoas/images/profile-2.png"
                                        alt="user"
                                        className="w40 mr-2"
                                    />
                                    <span>Vincent Parks </span>
                                    <span className="circle-icon bg-warning mt-3" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="default-author-profile.html"
                                    className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                                    data-tab="chats"
                                >
                                    <img
                                        src="http://uitheme.net/elomoas/images/profile-3.png"
                                        alt="user"
                                        className="w40 mr-2"
                                    />
                                    <span>Richard Bowers </span>
                                    <span className="circle-icon bg-success mt-3" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="default-author-profile.html"
                                    className="nav-content-bttn open-font pl-2 pb-2 pt-1 h-auto"
                                    data-tab="chats"
                                >
                                    <img
                                        src="http://uitheme.net/elomoas/images/profile-4.png"
                                        alt="user"
                                        className="w40 mr-2"
                                    />
                                    <span>John Lambert </span>
                                    <span className="circle-icon bg-success mt-3" />
                                </a>
                            </li>
                        </ul>
                        <div className="nav-caption fw-600 font-xssss text-grey-500">
                            <span /> Account
                        </div>
                        <ul className="mb-3 d-none">
                            <li className="logo d-none d-xl-block d-lg-block" />
                            <li>
                                <a
                                    href="default-settings.html"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="font-sm feather-settings mr-3 text-grey-500" />
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="default-analytics.html"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="font-sm feather-pie-chart mr-3 text-grey-500" />
                                    <span>Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="message.html"
                                    className="nav-content-bttn open-font h-auto pt-2 pb-2"
                                >
                                    <i className="font-sm feather-message-square mr-3 text-grey-500" />
                                    <span>Chat</span>
                                    <span className="circle-count bg-warning mt-0">23</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
