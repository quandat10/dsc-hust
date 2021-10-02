import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-footer">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-about">
                <img src="assets/img/logo.png" alt="" />
                <p>Developer Student Clubs Đại học Bách Khoa Hà Nội</p>
              </div>
              {/*widget-about end*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-contact">
                <ul className="contact-add">
                  <li>
                    <div className="contact-info">
                      <img src="assets/img/icon1.png" alt="" />
                      <div className="contact-tt">
                        <h4>Điện thoại</h4>
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
                        <span>Đại học Bách Khoa hà Nội</span>
                      </div>
                    </div>
                    {/*contact-info end*/}
                  </li>
                </ul>
              </div>
              {/*widget-contact end*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-links">
                <h3 className="widget-title">Truy cập nhanh</h3>
                <ul>
                  <li>
                    <Link to="/about">Giới thiệu</Link>
                  </li>
                  <li>
                    <Link to="/members">Thành viên</Link>
                  </li>
                  <li>
                    <Link to="/events">Sự kiện</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Liên hệ</Link>
                  </li>
                </ul>
              </div>
              {/*widget-links end*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6903090912265!2d105.8433993150316!3d21.00504768601128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad5569f4fbf1%3A0x5bf30cadcd91e2c3!2zxJDhuqBJIEjhu4xDIELDgUNIIEtIT0EgQ-G7lE5HIFRS4bqmTiDEkOG6oEkgTkdIxKhB!5e0!3m2!1svi!2s!4v1616154139433!5m2!1svi!2s"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {/*widget-iframe end*/}
            </div>
          </div>
        </div>
        {/*top-footer end*/}
        {/* <div className="bottom-footer">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p>© Google Developer</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/*bottom-footer end*/}
      </div>
    </footer>
  );
};
export default Footer;
