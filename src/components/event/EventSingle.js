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
                    S??? ki???n v??? H???c M??y v?? Tr?? Tu??? Nh??n T???o nh???m ????p ???ng nhu c???u
                    h???c v??? m???ng n??y cho c???ng ?????ng sinh vi??n l???p tr??nh t???i Vi???t
                    Nam. Tham gia bu???i hu???n luy???n n??y s??? gi??p c??c b???n c?? th??? c??
                    nh???ng hi???u bi???t c??n b???n cho nh???ng th??? nghi???m v?? b?????c ?????u cho
                    ng??nh H???c M??y v?? Tr?? Tu??? Nh??n T???o.
                  </p>
                  <p>
                    B???n mu???n b???t ?????u h???c v??? AI v?? ML? B???n mu???n bi???t th??m v???
                    nh???ng m???ng ch??nh c???a ML v?? AI nh?? NLP, Computer Vision,....
                    Ng??y 10/4 t???i ????y, TensorFlow User Group Vietnam v?? Google
                    Developer Student Clubs HUST v???i s??? h???p t??c c??ng Trung T??m
                    ?????i M???i S??ng T???o Vi???t Nam (VNIC) s??? t??? ch???c bu???i Workshop
                    tr???c tuy???n gi???i thi???u v??? ng??nh H???c m??y v?? Tr?? tu??? nh??n t???o.
                    Bu???i Workshop c?? s??? g??p m???t c???a c??c chuy??n gia h??ng ?????u
                    trong l??nh v???c h???c m??y v?? tr?? tu??? nh??n t???o. Ch????ng tr??nh d???
                    ki???n di???n ra v??o 9am - 4pm ng??y 10/4/2021 t???i NIC - trung
                    t??m ?????i m???i v?? s??ng t???o T??n Th???t Thuy???t. -9am - 4pm ng??y
                    10/4/2021 Ch????ng tr??nh ???????c t??? ch???c b???i TensorFlow User
                    Group Vietnam v?? Google Developer Student Clubs HUST v???i s???
                    h???p t??c c??ng Trung T??m ?????i M???i S??ng T???o Vi???t Nam (VNIC).
                  </p>
                  <h3>M???c ????ch c???a bu???i Workshop :</h3>
                  <ul className="ordrd">
                    <li>
                      - Gi???i thi???u v??? h???c m??y, tr?? tu??? nh??n t???o v?? c??c t??i
                      nguy??n ????? h???c
                    </li>
                    <li>
                      -T???p trung gi???i ????p c??c th???c m???c xoay quanh l??nh v???c trao
                      ?????i v?? tham kh???o c??c demo v??? Question Answering, Image
                      Captioning, etc.
                    </li>
                    <li>
                      -Kh??ng nh???ng v???y khi tham gia, c??c b???n s??? ???????c hu???n luy???n
                      b???i 3 Google Developer Expert m???ng H???c M??y v?? nh???n ch???ng
                      nh???n tham gia v?? c??c ph???n qu?? kh??c
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sg-event">
                        <span>1</span>
                        <h3>????ng k??</h3>
                        <p>https://dsc.community.dev/e/mntgen/</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sg-event">
                        <span>2</span>
                        <h3>Nh???n mail th??ng b??o</h3>
                        <p>
                          B???n s??? nh???n ???????c mail th??ng b??o x??c nh???n tham gia s???
                          ki???n th??nh c??ng
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="sg-event">
                        <span>3</span>
                        <h3>Tham d??? s??? ki???n</h3>
                        <p>
                          Khi ??i n??n mang theo Laptop ????? ?????t ???????c t???i ??a ki???n
                          th???c khi tham gia s??? ki???n
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
                            6 Ng. 7 T??n Th???t Thuy???t, D???ch V???ng H???u, C???u Gi???y, H??
                            N???i, Vi???t Nam
                          </h3>
                        </div>
                      </li>
                      <li>
                        <img src="assets/img/cir4.png" alt="" />
                        <div className="clt-info">
                          <h3>
                            10/04/2021 <span>9h30AM ?????n 16PM</span>
                          </h3>
                        </div>
                      </li>
                    </ul>
                    <div className="tech-info">
                      <div className="tech-tble">
                        <img src="https://via.placeholder.com/54x54" alt="" />
                        <div className="tch-info">
                          <h3>B???o ?????i</h3>
                          <span>Nh???c s?? & K??? s?? AI</span>
                        </div>
                      </div>
                      <div className="tech-tble">
                        <img src="https://via.placeholder.com/54x54" alt="" />
                        <div className="tch-info">
                          <h3>B?? Ng???c</h3>
                          <span>Founder VietAI,GDE ML</span>
                        </div>
                      </div>
                      <div className="tech-tble">
                        <img src="https://via.placeholder.com/54x54" alt="" />
                        <div className="tch-info">
                          <h3>Nguy???n Th??i B??nh</h3>
                          <span>VinBrain, GDE ML</span>
                        </div>
                      </div>

                      <a
                        href="https://dsc.community.dev/e/mntgen/"
                        title
                        className="btn-default"
                      >
                        Tham d??? <i className="fa fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                  {/*widget-information end*/}
                  <div className="widget widget-contact-dp mdp-contact">
                    <div className="mdp-our-contacts">
                      <h3>Li??n H???</h3>
                      <ul>
                        <li>
                          <div className="d-flex flex-wrap">
                            <div className="icon-v">
                              <img src="/assets/img/icon15.png" alt="" />
                            </div>
                            <div className="dd-cont">
                              <h4>??i???n tho???i</h4>
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
                              <h4>?????a ch???</h4>
                              <span>?????i h???c B??ch Khoa H?? N???i</span>
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
