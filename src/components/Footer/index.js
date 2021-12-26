function Footer() {
    return (
        <>
            <div className="app-footer border-0 shadow-lg">
                <a href="default.html" className="nav-content-bttn nav-center">
                    <i className="feather-home" />
                </a>
                <a href="default-follower.html" className="nav-content-bttn">
                    <i className="feather-package" />
                </a>
                <a
                    href="default-live-stream.html"
                    className="nav-content-bttn"
                    data-tab="chats"
                >
                    <i className="feather-layout" />
                </a>
                <a href="#" className="nav-content-bttn sidebar-layer">
                    <i className="feather-layers" />
                </a>
                <a href="default-settings.html" className="nav-content-bttn">
                    <img
                        src="http://uitheme.net/elomoas/images/female-profile.png"
                        alt="user"
                        className="w30 shadow-xss"
                    />
                </a>
            </div>
        </>
    );
}

export default Footer;
