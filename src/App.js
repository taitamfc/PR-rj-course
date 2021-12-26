import { Routes, Route } from "react-router-dom";

import Preload from "./components/Preloader";
import Navigation from "./components/Navigation";
import HeaderSearch from "./components/HeaderSearch";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

import Home from "./pages/Home";
import Course from "./pages/Course";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Preload />
      <Navigation />
      <div className="main-content">
        <TopBar />
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="courses/:id" element={<Course />} />
              <Route path="courses" element={<Courses />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
      <HeaderSearch />
    </>
  );
}

export default App;
