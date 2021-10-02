import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import ApiPlaceHolder from "../../../apis/ApiPlaceHolder";
import "./Event.css";
const Event = (props) => {
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [timeEvent, setTimeEvent] = useState("");
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [speaker, setSpeaker] = useState([]);
  const [data, setData] = useState();

  const initial = useRef(true);
  useEffect(() => {
    const token = props.token.data;
    if (initial.current) {
      initial.current = false;
      return;
    }
    const fectchPostEvent = async () => {
      const res = await ApiPlaceHolder.post(
        "/v1/events",
        {
          content: data.content,
          address: data.address,
          title: data.title,
          imageUrl: data.imageUrl,
          timeEvent: data.timeEvent,
          speaker: {
            name: data.name,
            profile: data.profile,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      console.log(res);
    };
    fectchPostEvent();
  }, [data]);

  const onSubmitChange = (e) => {
    e.preventDefault();
    setData({
      content,
      address,
      title,
      imageUrl,
      name,
      profile,
      timeEvent,
    });
  };
  return (
    <div className="event col-lg-6">
      {props.token.data.length === 0 ? null : (
        <form className="ui form">
          <div className="field">
            <label>Tiêu đề</label>
            <input
              type="text"
              name="first-name"
              placeholder="Tiêu đề"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Địa chỉ</label>
            <input
              type="text"
              name="last-name"
              placeholder="Địa chỉ"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Thời gian</label>
            <input
              type="text"
              name="last-name"
              placeholder="Thời gian"
              onChange={(e) => setTimeEvent(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Link Ảnh</label>
            <input
              type="text"
              name="last-name"
              placeholder="Link Ảnh"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Speaker 1</label>
            <input
              type="text"
              name="last-name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              name="last-name"
              placeholder="Profile"
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Nội dung</label>

            <textarea onChange={(e) => setContent(e.target.value)}></textarea>
          </div>

          <button
            className="ui button"
            type="submit"
            onClick={(e) => onSubmitChange(e)}
          >
            Tạo mới
          </button>
        </form>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Event);
