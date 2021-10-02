import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div>
      <section className="pager-section">
        <div className="container">
          <div className="pager-content text-center">
            <h2>Blog</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Blog</span>
              </li>
            </ul>
          </div>
          {/*pager-content end*/}
          <h2 className="page-titlee">DSC</h2>
        </div>
      </section>
      {/*pager-section end*/}
      {/*
        <section className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog-section p-0 posts-page">
                <div className="blog-posts">
                  <div className="blog-post">
                    <div className="blog-thumbnail">
                      <a href="#">
                        <img
                          src="assets/img/blog-large1.jpg"
                          alt=""
                          className="w-100"
                        />{" "}
                      </a>
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <h3 className="stick">
                        <a href="post.html">Standard Post Sticky</a>
                      </h3>
                      <p>
                        Nullam erat dolor, hendrerit id turpis laoreet, congue
                        dapibus odio. Duis tempor eros tortor, a ornare arcu
                        egestas quis. Donec vehicula eget quam maximus interdum.
                        Duis ultrices sapien eget metus luctus finibus. Morbi
                        nec lobortis ante, sed condimentum nisl. Nam laoreet
                        ullamcorper magna et fringilla
                      </p>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-post">
                    <div className="blog-thumbnail">
                      <a href="#">
                        <img
                          src="assets/img/blog-large2.jpg"
                          alt=""
                          className="w-100"
                        />{" "}
                      </a>
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="post.html">Standard Post Format</a>
                      </h3>
                      <p>
                        Nullam erat dolor, hendrerit id turpis laoreet, congue
                        dapibus odio. Duis tempor eros tortor, a ornare arcu
                        egestas quis. Donec vehicula eget quam maximus interdum.
                        Duis ultrices sapien eget metus luctus finibus. Morbi
                        nec lobortis ante, sed condimentum nisl. Nam laoreet
                        ullamcorper magna et fringilla
                      </p>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-post without-thumb">
                    <div className="blog-thumbnail">
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="post.html">Post Without Image</a>
                      </h3>
                      <p>
                        Nullam erat dolor, hendrerit id turpis laoreet, congue
                        dapibus odio. Duis tempor eros tortor, a ornare arcu
                        egestas quis. Donec vehicula eget quam maximus interdum.
                        Duis ultrices sapien eget metus luctus finibus. Morbi
                        nec lobortis ante, sed condimentum nisl. Nam laoreet
                        ullamcorper magna et fringilla
                      </p>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-post gallery-post">
                    <div className="blog-carousel slick-initialized slick-slider">
                      <div
                        aria-live="polite"
                        className="slick-list draggable"
                        tabIndex={0}
                      >
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: "4350px",
                            transform: "translate3d(-2610px, 0px, 0px)",
                          }}
                        >
                          <div
                            className="blog-thumbnail slick-slide slick-cloned"
                            data-slick-index={-1}
                            aria-hidden="true"
                            style={{ width: "870px" }}
                          >
                            <a href="#">
                              <img
                                src="assets/img/blog-large5.jpg"
                                alt=""
                                className="w-100"
                              />
                            </a>
                          </div>
                          <div
                            className="blog-thumbnail slick-slide"
                            data-slick-index={0}
                            aria-hidden="true"
                            style={{ width: "870px" }}
                          >
                            <a href="#">
                              <img
                                src="assets/img/blog-large8.jpg"
                                alt=""
                                className="w-100"
                              />
                            </a>
                          </div>
                          <div
                            className="blog-thumbnail slick-slide"
                            data-slick-index={1}
                            aria-hidden="true"
                            style={{ width: "870px" }}
                          >
                            <a href="#">
                              <img
                                src="assets/img/blog-large6.jpg"
                                alt=""
                                className="w-100"
                              />
                            </a>
                          </div>
                          <div
                            className="blog-thumbnail slick-slide slick-active"
                            data-slick-index={2}
                            aria-hidden="false"
                            style={{ width: "870px" }}
                          >
                            <a href="#">
                              <img
                                src="assets/img/blog-large5.jpg"
                                alt=""
                                className="w-100"
                              />
                            </a>
                          </div>
                          <div
                            className="blog-thumbnail slick-slide slick-cloned"
                            data-slick-index={3}
                            aria-hidden="true"
                            style={{ width: "870px" }}
                          >
                            <a href="#">
                              <img
                                src="assets/img/blog-large8.jpg"
                                alt=""
                                className="w-100"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        data-role="none"
                        className="slick-prev"
                        aria-label="previous"
                        style={{}}
                      >
                        Prev
                        <span className="icon-wrap" />
                      </button>
                      <button
                        type="button"
                        data-role="none"
                        className="slick-next"
                        aria-label="next"
                        style={{}}
                      >
                        Next
                        <span className="icon-wrap" />
                      </button>
                    </div>
                    <div className="blog-info">
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="post.html">Gallery Post Format</a>
                      </h3>
                      <p>
                        Nullam erat dolor, hendrerit id turpis laoreet, congue
                        dapibus odio. Duis tempor eros tortor, a ornare arcu
                        egestas quis. Donec vehicula eget quam maximus interdum.
                        Duis ultrices sapien eget metus luctus finibus. Morbi
                        nec lobortis ante, sed condimentum nisl. Nam laoreet
                        ullamcorper magna et fringilla
                      </p>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-post quote-post">
                    <div className="blog-info">
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <p>
                        Nullam erat dolor, hendrerit id turpis laoreet, congue
                        dapibus odio. Duis tempor eros tortor, a ornare arcu
                        egestas quis. Donec vehicula eget quam maximus interdum.
                        Duis ultrices sapien
                      </p>
                      <h4>Polina Podolski</h4>
                      <span>Mother</span>
                    </div>
                  </div>
                  <div className="blog-post quote-post no-bg">
                    <div className="blog-info">
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="post.html">Link Post Format</a>
                      </h3>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-post video-post">
                    <div className="blog-thumbnail">
                      <a href="#">
                        <img
                          src="assets/img/blog-large4.jpg"
                          alt=""
                          className="w-100"
                        />{" "}
                      </a>
                      <span className="category">
                        English, Teachers, Shelly
                      </span>{" "}
                      <a
                        href="https://www.youtube.com/watch?v=9MUDvEHkREM"
                        target="_blank"
                        className="video-play"
                      >
                        <img src="assets/img/play.png" alt="" />
                      </a>
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="post.html">Video Post Format</a>
                      </h3>
                      <p>
                        Nullam erat dolor, hendrerit id turpis laoreet, congue
                        dapibus odio. Duis tempor eros tortor, a ornare arcu
                        egestas quis. Donec vehicula eget quam maximus interdum.
                        Duis ultrices sapien eget metus luctus finibus. Morbi
                        nec lobortis ante, sed condimentum nisl. Nam laoreet
                        ullamcorper magna et fringilla
                      </p>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-post without-title">
                    <div className="blog-thumbnail">
                      <a href="#">
                        <img
                          src="assets/img/blog-large5.jpg"
                          alt=""
                          className="w-100"
                        />{" "}
                      </a>
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <p>
                        Nullam erat dolor, hendrerit id turpis laoreet, congue
                        dapibus odio. Duis tempor eros tortor, a ornare arcu
                        egestas quis. Donec vehicula eget quam maximus interdum.
                        Duis ultrices sapien eget metus luctus finibus.
                      </p>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-post">
                    <div className="blog-thumbnail">
                      <a href="#">
                        <img
                          src="assets/img/blog-large6.jpg"
                          alt=""
                          className="w-100"
                        />{" "}
                      </a>
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="post.html">Chat Post Format</a>
                      </h3>
                      <ul className="chat-format">
                        <li>
                          <strong>Kate:</strong>
                          <p>
                            Donec dignissim magna eget turpis sagittis
                            porttitor. Sed eu sem ornare, placerat nunc sit
                            amet, vehicula urna. Sed fringilla placerat
                            hendrerit. Vivamus tempus, dolor nec rutrum
                            sollicitudin, velit turpis finibus nibh, ac egestas
                            arcu orci eu turpis
                          </p>
                        </li>
                        <li>
                          <strong>Kristine:</strong>
                          <p>
                            Phasellus pulvinar lacus dolor, ac posuere urna
                            vehicula elementum
                          </p>
                        </li>
                        <li>
                          <strong>Bob:</strong>
                          <p>
                            Phasellus pulvinar lacus dolor, ac posuere urna
                            vehicula elementum
                          </p>
                        </li>
                        <li>
                          <strong>Sean:</strong>
                          <p>
                            Vivamus lobortis mollis ex, sit amet porta neque
                            sagittis ac. Donec tincidunt sem ac enim euismod, eu
                            ullamcorper ex Vestibulum
                          </p>
                        </li>
                      </ul>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  <div className="blog-post">
                    <div className="blog-thumbnail">
                      <a href="#">
                        <img
                          src="assets/img/blog-large8.jpg"
                          alt=""
                          className="w-100"
                        />{" "}
                      </a>
                      <span className="category">
                        English, Teachers, Shelly
                      </span>
                    </div>
                    <div className="blog-info">
                      <ul className="meta">
                        <li>
                          <a href="#">17/09/2020</a>
                        </li>
                        <li>
                          <a href="#">by Admin</a>
                        </li>
                        <li>
                          <img src="assets/img/icon13.png" alt="" />
                          <a href="#">Teachers,</a>
                          <a href="#"> School</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="#">
                          Status Post Format. Phasellus aliquet felis et dolor
                          lacinia commodo…
                        </a>
                      </h3>
                      <a href="post.html" className="read-more">
                        Read <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="mdp-pagiation">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        15
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar">
                <div className="widget widget-search">
                  <form>
                    <input type="text" name="search" placeholder="Search" />{" "}
                    <button type="submit">
                      <img src="assets/img/icon4.png" alt="" />
                    </button>
                  </form>
                </div>
                <div className="widget widget-categories">
                  <h3 className="widget-title">Categories</h3>
                  <ul>
                    <li>
                      <a href="#">Teachers</a> <span>45</span>
                    </li>
                    <li>
                      <a href="#">School News</a> <span>13</span>
                    </li>
                    <li>
                      <a href="#">Lessons</a> <span>6</span>
                    </li>
                    <li>
                      <a href="#">Shelly</a> <span>89</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-posts">
                  <h3 className="widget-title">Latest Posts</h3>
                  <div className="wd-posts">
                    <div className="wd-post d-flex flex-wrap">
                      <div className="wd-thumb">
                        <img src="assets/img/post1.png" alt="" />
                      </div>
                      <div className="wd-info">
                        <h3>
                          <a href="post.html">
                            Duis tempor eros tortor, a ornare
                          </a>
                        </h3>
                        <span>17/09/2020</span>
                      </div>
                    </div>
                    <div className="wd-post d-flex flex-wrap">
                      <div className="wd-thumb">
                        <img src="assets/img/post2.png" alt="" />
                      </div>
                      <div className="wd-info">
                        <h3>
                          <a href="post.html">
                            Duis tempor eros tortor, a ornare
                          </a>
                        </h3>
                        <span>17/09/2020</span>
                      </div>
                    </div>
                    <div className="wd-post d-flex flex-wrap">
                      <div className="wd-thumb">
                        <img src="assets/img/post3.png" alt="" />
                      </div>
                      <div className="wd-info">
                        <h3>
                          <a href="post.html">
                            Duis tempor eros tortor, a ornare
                          </a>
                        </h3>
                        <span>17/09/2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget-comments">
                  <h3 className="widget-title">Recent Comments</h3>
                  <ul>
                    <li>
                      <a href="#">Admin</a> in tempor eros tortor, a ornare
                    </li>
                    <li>
                      <a href="#">Admin</a> in tempor eros tortor, a ornare
                    </li>
                    <li>
                      <a href="#">Admin</a> in tempor eros tortor, a ornare
                    </li>
                  </ul>
                </div>
                <div className="widget widget-archives">
                  <h3 className="widget-title">Archives</h3>
                  <ul>
                    <li>
                      <a href="#">December</a>
                    </li>
                    <li>
                      <a href="#">January</a>
                    </li>
                    <li>
                      <a href="#">February</a>
                    </li>
                    <li>
                      <a href="#">March</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tags">
                  <h3 className="widget-title">Tags</h3>
                  <ul>
                    <li>
                      <a href="#">Teachers</a>
                    </li>
                    <li>
                      <a href="#">Lessons</a>
                    </li>
                    <li>
                      <a href="#">Shelly</a>
                    </li>
                    <li>
                      <a href="#">School</a>
                    </li>
                    <li>
                      <a href="#">Theme</a>
                    </li>
                    <li>
                      <a href="#">Class</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-calendar">
                  <h3 className="widget-title">Calendar</h3>
                  <div className="mdp-calendar">
                    <h3 className="month">July 2020</h3>
                    <table>
                      <thead>
                        <tr>
                          <th>S</th>
                          <th>M</th>
                          <th>T</th>
                          <th>W</th>
                          <th>T</th>
                          <th>F</th>
                          <th>S</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td className="active">6</td>
                          <td>7</td>
                          <td>8</td>
                          <td>9</td>
                          <td>10</td>
                          <td>11</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>13</td>
                          <td>14</td>
                          <td>15</td>
                          <td>16</td>
                          <td>17</td>
                          <td>18</td>
                        </tr>
                        <tr>
                          <td>19</td>
                          <td>20</td>
                          <td>21</td>
                          <td>22</td>
                          <td>23</td>
                          <td>24</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>27</td>
                          <td>28</td>
                          <td>29</td>
                          <td>30</td>
                          <td>31</td>
                        </tr>
                      </tbody>
                    </table>
                    <ul className="controls">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-left" /> Prev
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Next <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/*page-content end*/}
    </div>
  );
};
export default BlogPage;
