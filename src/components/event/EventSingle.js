import { Link } from "react-router-dom";

const EventSingle = () => {
  return (
    <div>
      <div>
        <section className="pager-section">
          <div className="container">
            <div className="pager-content text-center">
              <h2>Workshop : AI & Machine learning</h2>
              <ul>
                <li>
                  <a href="#" title>
                    Home
                  </a>
                </li>
                <li>
                  <Link to="/events" title>
                    Events
                  </Link>
                </li>
                <li>
                  <span>Machine-learning</span>
                </li>
              </ul>
            </div>
            {/*pager-content end*/}
            <h2 className="page-titlee">DSC</h2>
          </div>
        </section>
        {/*pager-section end*/}
        <section className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="event-single">
                  <div className="event-gallery-sec">
                    <div className="event-gallery">
                      <img src="/assets/img/banner.png" alt="" />
                    </div>
                    {/*event-gallery end*/}
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <div className="event-gallery">
                          <img src="/assets/img/baodai.png" alt="" />
                        </div>
                        {/*event-gallery end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <div className="event-gallery">
                          <img src="/assets/img/bangoc.png" alt="" />
                        </div>
                        {/*event-gallery end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <div className="event-gallery">
                          <img src="/assets/img/thaibinh.png" alt="" />
                        </div>
                        {/*event-gallery end*/}
                      </div>

                      {/*event-gallery end*/}
                    </div>
                  </div>
                  {/*event-gallery-sec end*/}
                  <p>
                    Sự kiện về Học Máy và Trí Tuệ Nhân Tạo nhằm đáp ứng nhu cầu
                    học về mảng này cho cộng đồng sinh viên lập trình tại Việt
                    Nam. Tham gia buổi huấn luyện này sẽ giúp các bạn có thể có
                    những hiểu biết căn bản cho những thử nghiệm và bước đầu cho
                    ngành Học Máy và Trí Tuệ Nhân Tạo.
                  </p>
                  <p>
                    Bạn muốn bắt đầu học về AI và ML? Bạn muốn biết thêm về
                    những mảng chính của ML và AI như NLP, Computer Vision,....
                    Ngày 10/4 tới đây, TensorFlow User Group Vietnam và Google
                    Developer Student Clubs HUST với sự hợp tác cùng Trung Tâm
                    Đổi Mới Sáng Tạo Việt Nam (VNIC) sẽ tổ chức buổi Workshop
                    trực tuyến giới thiệu về ngành Học máy và Trí tuệ nhân tạo.
                    Buổi Workshop có sự góp mặt của các chuyên gia hàng đầu
                    trong lĩnh vực học máy và trí tuệ nhân tạo. Chương trình dự
                    kiến diễn ra vào 9am - 4pm ngày 10/4/2021 tại NIC - trung
                    tâm đổi mới và sáng tạo Tôn Thất Thuyết. -9am - 4pm ngày
                    10/4/2021 Chương trình được tổ chức bởi TensorFlow User
                    Group Vietnam và Google Developer Student Clubs HUST với sự
                    hợp tác cùng Trung Tâm Đổi Mới Sáng Tạo Việt Nam (VNIC).
                  </p>
                  <h3>Mục đích của buổi Workshop :</h3>
                  <ul className="ordrd">
                    <li>
                      - Giới thiệu về học máy, trí tuệ nhân tạo và các tài
                      nguyên để học
                    </li>
                    <li>
                      -Tập trung giải đáp các thắc mắc xoay quanh lĩnh vực trao
                      đổi và tham khảo các demo về Question Answering, Image
                      Captioning, etc.
                    </li>
                    <li>
                      -Không những vậy khi tham gia, các bạn sẽ được huấn luyện
                      bởi 3 Google Developer Expert mảng Học Máy và nhận chứng
                      nhận tham gia và các phần quà khác
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sg-event">
                        <span>1</span>
                        <h3>Đăng kí</h3>
                        <p>https://dsc.community.dev/e/mntgen/</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sg-event">
                        <span>2</span>
                        <h3>Nhận mail thông báo</h3>
                        <p>
                          Bạn sẽ nhận được mail thông báo xác nhận tham gia sự
                          kiện thành công
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sg-event">
                        <span>3</span>
                        <h3>Tham dự sự kiện</h3>
                        <p>
                          Khi đi nên mang theo Laptop để đạt được tối đa kiến
                          thức khi tham gia sự kiện
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mdp-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1535385804204!2d105.7821479150319!3d21.02654168599953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abd7a5835c99%3A0xf7b50384c10c29ce!2zVHJ1bmcgdMOibSDEkOG7lWkgbeG7m2kgc8OhbmcgdOG6oW8gUXXhu5FjIGdpYSAoTklDIC0gQ-G6p3UgR2nhuqV5KQ!5e0!3m2!1svi!2shk!4v1616252091717!5m2!1svi!2shk"></iframe>
                  </div>
                  {/*mdp-map end*/}
                </div>
                {/*event-single end*/}
              </div>
              <div className="col-lg-3">
                <div className="sidebar class-sidebar position-static">
                  <div className="widget widget-information">
                    <ul className="clt">
                      <li>
                        <img src="assets/img/cir3.png" alt="" />
                        <div className="clt-info">
                          <h3>
                            6 Ng. 7 Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy, Hà
                            Nội, Việt Nam
                          </h3>
                        </div>
                      </li>
                      <li>
                        <img src="assets/img/cir4.png" alt="" />
                        <div className="clt-info">
                          <h3>
                            10/04/2021 <span>9h30AM đến 16PM</span>
                          </h3>
                        </div>
                      </li>
                    </ul>
                    <div className="tech-info">
                      <div className="tech-tble">
                        <img src="https://via.placeholder.com/54x54" alt="" />
                        <div className="tch-info">
                          <h3>Bảo Đại</h3>
                          <span>Nhạc sĩ & Kỹ sư AI</span>
                        </div>
                      </div>
                      <div className="tech-tble">
                        <img src="https://via.placeholder.com/54x54" alt="" />
                        <div className="tch-info">
                          <h3>Bá Ngọc</h3>
                          <span>Founder VietAI,GDE ML</span>
                        </div>
                      </div>
                      <div className="tech-tble">
                        <img src="https://via.placeholder.com/54x54" alt="" />
                        <div className="tch-info">
                          <h3>Nguyễn Thái Bình</h3>
                          <span>VinBrain, GDE ML</span>
                        </div>
                      </div>

                      <a
                        href="https://dsc.community.dev/e/mntgen/"
                        title
                        className="btn-default"
                      >
                        Tham dự <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  {/*widget-information end*/}
                  <div className="widget widget-contact-dp mdp-contact">
                    <div className="mdp-our-contacts">
                      <h3>Liên Hệ</h3>
                      <ul>
                        <li>
                          <div className="d-flex flex-wrap">
                            <div className="icon-v">
                              <img src="/assets/img/icon15.png" alt="" />
                            </div>
                            <div className="dd-cont">
                              <h4>Điện thoại</h4>
                              <span>+8437 828 3131</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex flex-wrap">
                            <div className="icon-v">
                              <img src="/assets/img/icon16.png" alt="" />
                            </div>
                            <div className="dd-cont">
                              <h4>Email</h4>
                              <span>hello@dsc-hust.club</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex flex-wrap">
                            <div className="icon-v">
                              <img src="/assets/img/icon17.png" alt="" />
                            </div>
                            <div className="dd-cont">
                              <h4>Địa chỉ</h4>
                              <span>Đại học Bách Khoa Hà Nội</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*widget-contact-dp end*/}
                </div>
                {/*sidebar end*/}
              </div>
            </div>
          </div>
        </section>
        {/*page-content end*/}
      </div>
    </div>
  );
};
export default EventSingle;
