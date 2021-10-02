import MainBanner from "./main_banner/MainBanner";
import ResponsiveMenu from "./responsive_menu/ResponsiveMenu";
import Event from "./event/Event";
import OutStandingBlog from "./blog/OutStandingBlog";
import JoinUs from "./join_us/JoinUs";
import Footer from "./footer/Footer";
import AboutUs from "./about_us/AboutUs";
import Blog from "./blog/Blog";
import Member from "./member/Member";
import { useState } from "react";

const Home = () => {
  return (
    <div>
      <div className="main-section">
        {/* <--header--> */}
        {/* <!--responsive-menu--> */}
        <ResponsiveMenu />
        {/* <!--main-banner--> */}
        <MainBanner />
        <h2 className="main-title">DSC</h2>
      </div>
      <AboutUs />
      <Member />
      {/* <Blog /> */}
      <Event />
      {/* <OutStandingBlog /> */}
      <JoinUs />
      <Footer />
    </div>
  );
};
export default Home;
