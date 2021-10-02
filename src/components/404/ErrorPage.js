import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="wrapper">
      <div className="error-page">
        <h2 className="page-title">Shelly</h2>
        <div className="container">
          <div className="error-text">
            <h2>Lỗi!!!</h2>
            <h3>Trang không tồn tại</h3>
            <Link to="/" title className="btn-default">
              Home Page <i className="fa fa-long-arrow-alt-right" />
            </Link>
            <ul className="social-icons">
              <li>
                <a href="#" title>
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <Link to="/" title>
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <a href="#" title>
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
            {/*social-icons end*/}
          </div>
          {/*error-text end*/}
        </div>
      </div>
      {/*error-page end*/}
    </div>
  );
};
