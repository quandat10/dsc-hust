import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <section className="pager-section">
        <div className="container">
          <div className="pager-content text-center">
            <h2>Liên hệ</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Contacts</span>
              </li>
            </ul>
          </div>
          {/*pager-content end*/}
          <h2 className="page-titlee">DSC</h2>
        </div>
      </section>
      {/*pager-section end*/}
      <div>
        {/* section class="page-content"; */}
        <div className="container">
          {/* <div className="mdp-map">
            <iframe src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" />
          </div>
          mdp-map end */}
          <div className="mdp-contact">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <div className="comment-area">
                  <h3>Đóng góp ý kiến</h3>
                  <form id="contact-form" method="post" action="#">
                    <div className="response" />
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="name"
                            placeholder="Tên"
                            required
                          />
                        </div>
                        {/*form-group end*/}
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        {/*form-group end*/}
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Tin nhắn"
                            defaultValue={""}
                          />
                        </div>
                        {/*form-group end*/}
                      </div>
                      <div className="col-lg-12">
                        <div className="form-submit">
                          <button
                            type="button"
                            id="submit"
                            className="btn-default"
                          >
                            Gửi <i className="fa fa-long-arrow-alt-right" />
                          </button>
                        </div>
                        {/*form-submit end*/}
                      </div>
                    </div>
                  </form>
                </div>
                {/*comment-area end*/}
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="mdp-our-contacts">
                  <h3>Thông tin</h3>
                  <ul>
                    <li>
                      <div className="d-flex flex-wrap">
                        <div className="icon-v">
                          <img src="assets/img/icon15.png" alt="" />
                        </div>
                        <div className="dd-cont">
                          <h4>Điện thoại</h4>
                          <span>+84 378 283 131</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex flex-wrap">
                        <div className="icon-v">
                          <img src="assets/img/icon16.png" alt="" />
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
                          <img src="assets/img/icon17.png" alt="" />
                        </div>
                        <div className="dd-cont">
                          <h4>Địa chỉ</h4>
                          <span>Đại học Bách Khoa Hà Nội</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*mdp-our-contacts end*/}
              </div>
            </div>
          </div>
          {/*mdp-contact end*/}
        </div>
        {/*
         */}
      </div>
    </div>
  );
};
export default ContactPage;
