import { Link } from "react-router-dom";

const ResponsiveMenu = () => {
  return (
    <div className="responsive-menu">
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/about">Giới thiệu</Link>
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
  );
};
export default ResponsiveMenu;
