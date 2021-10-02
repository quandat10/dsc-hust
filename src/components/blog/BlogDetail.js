const BlogDetail = () => {
  return (
    <div>
      <section className="pager-section blog-version">
        <div className="container">
          <div className="pager-content text-center">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <span>Natural Sciences &amp; Mathematics Courses</span>
              </li>
            </ul>
            <h2>Natural Sciences &amp; Mathematics</h2>
            <span className="categry">English, Teachers, Shelly</span>
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
          </div>
          {/*pager-content end*/}
        </div>
      </section>
      {/*pager-section end*/}
      <section className="page-content p80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog-post single">
                <p>
                  Donec hendrerit mauris sed tellus consequat, vitae eleifend
                  risus posuere. Fusce vulputate dui ultrices mauris iaculis
                  ultrices. Praesent hendrerit augue non massa efficitur, varius
                  placerat nibh consectetur. Cras maximus semper magna, ut
                  laoreet eros bibendum sit amet. Proin ut posuere neque.
                  Curabitur eget mauris sit amet lorem faucibus lacinia. Duis
                  sapien tellus, aliquam sit amet augue in, feugiat tempus orci.
                </p>
                <p>
                  Suspendisse feugiat, est sed dapibus eleifend, lectus nisl
                  ullamcorper enim, et ullamcorper mauris ligula ac neque. Ut
                  aliquam justo vitae nisi fermentum malesuada. Duis sem eros,
                  varius vitae velit eu, mollis convallis turpis. Etiam ante
                  nisl, maximus vitae sem non, dignissim tristique tellus.
                  Phasellus at risus nec arcu malesuada aliquet. Pellentesque
                  lacus ipsum, rutrum sit amet rutrum nec, imperdiet eu velit.
                  Integer posuere maximus pulvinar. Integer feugiat mollis neque
                  rhoncus cursus.
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <p>
                      Suspendisse feugiat, est sed dapibus eleifend, lectus nisl
                      ullamcorper enim, et ullamcorper mauris ligula ac neque.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      Quisque nunc tellus, sodales aliquam mauris in, placerat
                      blandit quam. In ornare et nisi eget tempus.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      Nullam dui nulla, consequat gravida tellus a, euismod
                      cursus eros. Quisque ut lacus ligula. In sollicitudin dui{" "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="oderd">
                      <h3>Unordered List</h3>
                      <ul>
                        <li>
                          Etiam ante nisl, maximus vitae sem non, dignissim
                        </li>
                        <li>Donec blandit, sapien eu porttitor blandit</li>
                        <li>Sed at urna at massa viverra feugiat non </li>
                      </ul>
                    </div>
                    {/*ordrd end*/}
                  </div>
                  <div className="col-md-6">
                    <div className="oderd">
                      <h3>Ordered List</h3>
                      <ol>
                        <li>
                          1. Etiam ante nisl, maximus vitae sem non, dignissim
                        </li>
                        <li>2. Donec blandit, sapien eu porttitor blandit</li>
                        <li>3. Sed at urna at massa viverra feugiat non </li>
                      </ol>
                    </div>
                    {/*ordrd end*/}
                  </div>
                </div>
                <p>
                  In ornare et nisi eget tempus. Integer imperdiet sit amet nisi
                  vel elementum. Pellentesque commodo, tellus vel ultricies
                  sodales, eros metus dapibus dolor, in elementum ex turpis
                  ornare nisl. Quisque dictum lorem eros, nec porta tellus
                  aliquet in. Ut id consectetur felis. Praesent tincidunt metus
                  nec tortor fringilla porttitor. Quisque pretium sapien ut
                  mattis commodo.{" "}
                </p>
                <blockquote>
                  <p>
                    Nullam erat dolor, hendrerit id turpis laoreet, congue
                    dapibus odio. Duis tempor eros tortor, a ornare arcu egestas
                    quis. Donec vehicula eget quam maximus interdum. Duis
                    ultrices sapien
                  </p>
                  <h4>Polina Podolski</h4>
                  <span>Mother</span>
                </blockquote>
                <p>
                  Suspendisse feugiat, est sed dapibus eleifend, lectus nisl
                  ullamcorper enim, et ullamcorper mauris ligula ac neque. Ut
                  aliquam justo vitae nisi fermentum malesuada. Duis sem eros,
                  varius vitae velit eu, mollis convallis turpis. Etiam ante
                  nisl, maximus vitae sem non, dignissim tristique tellus.
                  Phasellus at risus nec arcu malesuada aliquet.
                </p>
                <p>
                  Duis a nibh id metus laoreet hendrerit ut non orci. Nam
                  lacinia urna ex, et vestibulum nibh pretium ut. Sed venenatis
                  euismod sapien, vel porta metus consectetur non. Sed suscipit
                  auctor urna quis imperdiet. Mauris libero ex, cursus at semper
                  sit amet, gravida id libero.
                </p>
              </div>
              {/*blog-post single end*/}
              <div className="mdp-post-comments">
                <h3 className="mdp-sub-title">Comments</h3>
                <ul>
                  <li>
                    <div className="mdp-comment d-flex flex-wrap">
                      <div className="mdp-img">
                        <img src="https://via.placeholder.com/72x72" alt="" />
                      </div>
                      <div className="mdp-com">
                        <h3>Polina Podolski</h3>
                        <span>25/09/2020</span>
                        <p>
                          Nullam iaculis elit tempor tellus eleifend, lobortis
                          porta velit hendrerit. Curabitur eu felis maximus,
                          tempus enim a, venenatis tortor. Phasellus elementum
                          massa vel diam rhoncus vulputate.
                        </p>
                        <a href="#" title className="reply-btn">
                          <i className="fa fa-reply" />
                          Reply
                        </a>
                      </div>
                    </div>
                    {/*mdp-comment end*/}
                  </li>
                </ul>
              </div>
              {/*post-comments end*/}
              <div className="mdp-contact">
                <div className="comment-area">
                  <h3 className="mdp-sub-title">Add Comment</h3>
                  <form>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name" />
                        </div>
                        {/*form-group end*/}
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        {/*form-group end*/}
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <input
                            type="text"
                            name="website"
                            placeholder="Website"
                          />
                        </div>
                        {/*form-group end*/}
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        {/*form-group end*/}
                      </div>
                      <div className="col-lg-12">
                        <div className="form-submit">
                          <a href="#" title className="btn-default">
                            Send Now{" "}
                            <i className="fa fa-long-arrow-alt-right" />
                          </a>
                        </div>
                        {/*form-submit end*/}
                      </div>
                    </div>
                  </form>
                </div>
                {/*comment-area end*/}
              </div>
              {/*mdp-contact end*/}
            </div>
            <div className="col-lg-3">
              <div className="sidebar">
                <div className="widget widget-search">
                  <form>
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">
                      <img src="assets/img/icon4.png" alt="" />
                    </button>
                  </form>
                </div>
                {/*widget-search end*/}
                <div className="widget widget-categories">
                  <h3 className="widget-title">Categories</h3>
                  <ul>
                    <li>
                      <a href="#">Teachers</a>
                      <span>45</span>
                    </li>
                    <li>
                      <a href="#">School News</a>
                      <span>13</span>
                    </li>
                    <li>
                      <a href="#">Lessons</a>
                      <span>6</span>
                    </li>
                    <li>
                      <a href="#">Shelly</a>
                      <span>89</span>
                    </li>
                  </ul>
                </div>
                {/*widget-categories end*/}
                <div className="widget widget-posts">
                  <h3 className="widget-title">Latest Posts</h3>
                  <div className="wd-posts">
                    <div className="wd-post d-flex flex-wrap">
                      <div className="wd-thumb">
                        <img src="https://via.placeholder.com/52x52" alt="" />
                      </div>
                      <div className="wd-info">
                        <h3>
                          <a href="#" title>
                            Duis tempor eros tortor, a ornare
                          </a>
                        </h3>
                        <span>17/09/2020</span>
                      </div>
                    </div>
                    {/*wd-post end*/}
                    <div className="wd-post d-flex flex-wrap">
                      <div className="wd-thumb">
                        <img src="https://via.placeholder.com/52x52" alt="" />
                      </div>
                      <div className="wd-info">
                        <h3>
                          <a href="#" title>
                            Duis tempor eros tortor, a ornare
                          </a>
                        </h3>
                        <span>17/09/2020</span>
                      </div>
                    </div>
                    {/*wd-post end*/}
                    <div className="wd-post d-flex flex-wrap">
                      <div className="wd-thumb">
                        <img src="https://via.placeholder.com/52x52" alt="" />
                      </div>
                      <div className="wd-info">
                        <h3>
                          <a href="#" title>
                            Duis tempor eros tortor, a ornare
                          </a>
                        </h3>
                        <span>17/09/2020</span>
                      </div>
                    </div>
                    {/*wd-post end*/}
                  </div>
                  {/*wd-posts end*/}
                </div>
                {/*widget-posts end*/}
                <div className="widget widget-comments">
                  <h3 className="widget-title">Recent Comments</h3>
                  <ul>
                    <li>
                      <a href="#" title>
                        Admin
                      </a>{" "}
                      in tempor eros tortor, a ornare{" "}
                    </li>
                    <li>
                      <a href="#" title>
                        Admin
                      </a>{" "}
                      in tempor eros tortor, a ornare{" "}
                    </li>
                    <li>
                      <a href="#" title>
                        Admin
                      </a>{" "}
                      in tempor eros tortor, a ornare{" "}
                    </li>
                  </ul>
                </div>
                {/*widget-comments end*/}
                <div className="widget widget-archives">
                  <h3 className="widget-title">Archives</h3>
                  <ul>
                    <li>
                      <a href="#" title>
                        December
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        January
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        February
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        March
                      </a>
                    </li>
                  </ul>
                </div>
                {/*widget-archives end*/}
                <div className="widget widget-tags">
                  <h3 className="widget-title">Tags</h3>
                  <ul>
                    <li>
                      <a href="#" title>
                        Teachers
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        Lessons
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        Shelly
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        School
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        Theme
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        Class
                      </a>
                    </li>
                  </ul>
                </div>
                {/*widget-tags end*/}
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
                        <a href="#" title>
                          <i className="fa fa-angle-left" /> Prev
                        </a>
                      </li>
                      <li>
                        <a href="#" title>
                          Next <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*mdp-calendar end*/}
                </div>
                {/*widget-calendar end*/}
              </div>
              {/*sidebar end*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogDetail;
