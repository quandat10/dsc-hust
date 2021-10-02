import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div>
      <section className="pager-section">
        <div className="container">
          <div className="pager-content text-center">
            <h2>Giới thiệu</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>About</span>
              </li>
            </ul>
          </div>
          {/*pager-content end*/}
          <h2 className="page-titlee">DSC</h2>
        </div>
      </section>
      {/*pager-section end*/}
      <section className="about-page-content">
        <div className="container">
          <div className="abt-page-row">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-title">
                  <h2>
                    Giới thiêu về <br /> <span>DSC</span>
                  </h2>
                  <p className="mw-100">
                    Developer Student Clubs là 1 cộng đồng dành cho những sinh
                    viên ở các trường đại học có niềm đam mê với công nghệ, muốn
                    tiếp cận những sự đổi mới công nghệ trên toàn thế giới, được
                    hỗ trợ bởi GOOGLE với mục tiêu xây dựng câu lạc bộ tại các
                    trường đại học. Và giải quyết các vấn đề của cộng đồng
                  </p>
                  {/* <a href="classes.html" className="btn-default">
                    Classes <i className="fa fa-long-arrow-alt-right" />
                  </a> */}
                </div>
                {/*section-title end*/}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="avt-img">
                  <img src="assets/img/img_1.png" alt="" />
                </div>
                {/*avt-img end*/}
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="avt-img">
                  <img src="assets/img/img_2.jpg" alt="" />
                </div>
                {/*avt-img end*/}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="act-inffo">
                  <span>DSC</span>
                  <h2>Sứ mệnh</h2>
                  <p>
                    Developer Student Clubs Là cầu nối giúp sinh viên thu hẹp
                    khoảng cách giữa Lý thuyết và Thực tiễn.
                  </p>
                  <ul>
                    <li>
                      {" "}
                      Sinh Viên: Nâng cao kiến thức , kĩ năng và mở rộng tầm
                      nhìn về công nghệ
                    </li>
                    <li>
                      {" "}
                      Cộng Đồng: Sinh viên sử dụng các kỹ năng được hỗ trợ mạnh
                      mẽ từ Google để giải quyết các vấn đề về mà doanh nghiệp,
                      địa phương đang gặp phải
                    </li>
                    {/* <li>Sed at urna at massa viverra feugiat non </li> */}
                  </ul>
                </div>
                {/*act-inffo end*/}
              </div>
            </div>
          </div>
          {/*abt-page-row end*/}
        </div>
      </section>
      {/*about-page-content end*/}
      <section className="benifit-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Lợi ích</h2>
                <p>
                  <li>-Làm việc trong môi trường chuyên nghiệp</li>
                  <li>-Được truy cập vào nguồn tài liệu từ Google Documents</li>
                  <li>
                    -Mở rộng kết nối, làm việc cùng với cộng động và các chuyên
                    gia của Google(GDG,GDE,...)
                  </li>

                  <li>
                    -Tìm hiểu các hoạt động về chủ đề kỹ thuật (web, app, AI/ML,
                    cloud) thông qua hội thảo, workshop và hoạt động xây dựng dự
                    án
                  </li>
                  <li>
                    -Áp dụng những kiến thức và kết nối mới của bạn để xây dựng
                    các giải pháp tuyệt vời cho các vấn đề doanh nghiệp. Nâng
                    cao các kỹ năng mềm: làm việc nhóm, giao tiếp, tư duy thiết
                    kế, ...
                  </li>
                  <li>
                    -Nâng cao kỹ năng công nghệ: Code, giải quyết vấn đề, quản
                    lý dự án, ...
                  </li>
                </p>
                <a href="contacts.html" className="btn-default">
                  Contacts <i className="fa fa-long-arrow-alt-right" />
                </a>
              </div>
              {/*section-title end*/}
            </div>
            <div className="col-lg-6">
              <div className="about-us-section p-0">
                <div className="about-sec">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <img src="assets/img/icon5.png" alt="" />
                        <h3>Community</h3>
                        <p>Chia sẻ công nghệ trong cộng đồng sinh viên HUST</p>
                      </div>
                      {/*abt-col end*/}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <img src="assets/img/icon7.png" alt="" />
                        <h3>Events</h3>
                        <p>
                          Tổ chức các buổi workshop, hackathon cho sinh viên
                        </p>
                      </div>
                      {/*abt-col end*/}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <img src="assets/img/icon9.png" alt="" />
                        <h3>Technology</h3>
                        <p>Tiếp thu sự tiến bộ công nghệ</p>
                      </div>
                      {/*abt-col end*/}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="abt-col">
                        <img src="assets/img/icon8.png" alt="" />
                        <h3>Activities</h3>
                        <p>
                          Tổ chức các hoạt động vui chơi, gắn bó trong câu lạc
                          bộ
                        </p>
                      </div>
                      {/*abt-col end*/}
                    </div>
                  </div>
                </div>
                {/*about-rw end*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*benifit-section end*/}
    </div>
  );
};
export default AboutUsPage;
