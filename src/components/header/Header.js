import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeHead, setActiveHead] = useState();
  useEffect(() => {
    console.log("abcs", window.location.pathname);
    setActiveHead(window.location.pathname);
  }, []);
  return (
    <header>
      <div className="container">
        <div className="header-content d-flex flex-wrap align-items-center">
          <div className="logo">
            <Link
              to="/"
              onClick={() => {
                setActiveHead("/");
              }}
            >
              <img
                src="assets/img/logo.png"
                alt=""
                srcSet="assets/img/logo.png"
              />
            </Link>
          </div>
          {/*logo end*/}
          <ul className="contact-add d-flex flex-wrap">
            <li>
              <div className="contact-info">
                <img src="assets/img/icon1.png" alt="" />
                <div className="contact-tt">
                  <h4>Call</h4>
                  <span>+84 378 283 131</span>
                </div>
              </div>
              {/*contact-info end*/}
            </li>
            <li>
              <div className="contact-info">
                <img src="assets/img/email.png" alt="" />
                <div className="contact-tt">
                  <h4>Email</h4>
                  <span>hello@dsc-hust.club</span>
                </div>
              </div>
              {/*contact-info end*/}
            </li>
            <li>
              <div className="contact-info">
                <img src="assets/img/edu.png" alt="" />
                <div className="contact-tt">
                  <h4>University</h4>
                  <span>Ha Noi University of Science & Technology</span>
                </div>
              </div>
              {/*contact-info end*/}
            </li>
          </ul>
          {/*contact-information end*/}
          <div className="menu-btn" onClick={() => console.log("click")}>
            <a>
              <span className="bar1" />
              <span className="bar2" />
              <span className="bar3" />
            </a>
          </div>
          {/*menu-btn end*/}
        </div>
        {/*header-content end*/}
        <div className="navigation-bar d-flex flex-wrap align-items-center">
          <nav>
            <ul>
              <li>
                <Link
                  className={activeHead === "/" ? "active" : ""}
                  to="/"
                  onClick={() => setActiveHead("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={activeHead === "/about" ? "active" : ""}
                  to="/events"
                  onClick={() => setActiveHead("/about")}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={activeHead === "/members" ? "active" : ""}
                  to="/members"
                  onClick={() => setActiveHead("/members")}
                >
                  Members
                </Link>
                {/* <ul>
                  <li>
                    <a href="class-single.html">Events</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link
                  className={activeHead === "/events" ? "active" : ""}
                  to="/events"
                  onClick={() => setActiveHead("/events")}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className={activeHead === "/blogs" ? "active" : ""}
                  to="/blogs"
                  onClick={() => setActiveHead("/blogs")}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className={activeHead === "/contacts" ? "active" : ""}
                  to="/contacts"
                  onClick={() => setActiveHead("/contacts")}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          {/*nav end*/}
          <ul className="social-links ml-auto">
            <li>
              <a href="https://www.facebook.com/dsc.hust.2020">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li> */}
          </ul>
        </div>
        {/*navigation-bar end*/}
      </div>
    </header>
  );
};
export default Header;
