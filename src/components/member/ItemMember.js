import { Link } from "react-router-dom";

const ItemMember = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full-wdth">
      <div className="teacher">
        <div className="teacher-img">
          <img src="assets/img/elliot.jpeg" alt="" className="w-100" />
          <div className="sc-div">
            <ul>
              <li>
                <Link to="/">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
            </ul>
            <span>
              <img src="assets/img/plus.png" alt="" />
            </span>
          </div>
        </div>
        <div className="teacher-info">
          <h3>
            <Link to="/members">{props.name}</Link>
          </h3>
          <span>{props.role}</span>
        </div>
      </div>
      {/*teacher end*/}
    </div>
  );
};
export default ItemMember;
