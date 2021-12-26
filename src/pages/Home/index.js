import React, { useState, useEffect } from 'react';

import HomeCategories from "../../components/HomeCategories";
import HomeCourses from "../../components/HomeCourses";
import ElmBannerCourses from "../../components/ElmBannerCourses";
function Home() {

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
                <ElmBannerCourses />
                <HomeCategories />
                {
                    isLoaded && <HomeCourses title="Khóa học nổi bật" courses={items} />
                }
            </div>
        </>
    );
}

export default Home;
