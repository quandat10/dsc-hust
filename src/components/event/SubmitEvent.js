import { Link } from "react-router-dom";

const SubmitEvent = ()=>{
    return (
        <div className="wrapper">
      <div className="error-page">
        <h2 className="page-title">Shelly</h2>
        <div className="container">
          <div className="error-text">
            <h2>DSC HUST</h2>
            <h3>Xác nhận thành công</h3>
            <Link to="/" title className="btn-default">
              Trang chủ <i className="fa fa-long-arrow-alt-right" />
            </Link>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/dsc.hust.2020" title>
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              {/* <li>
                <Link to="/" title>
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <a href="#" title>
                  <i className="fab fa-linkedin-in" />
                </a>
              </li> */}
            </ul>
            {/*social-icons end*/}
          </div>
          {/*error-text end*/}
        </div>
      </div>
      {/*error-page end*/}
    </div>
    )
}
export default SubmitEvent;