import { connect } from "react-redux";
import Pagiation from "../pagiation/Pagiation";
import ItemMember from "./ItemMember";
import { GetMember } from "../../actions";
import { useEffect } from "react";
import Loading from "../loader/Loading";
import { Link } from "react-router-dom";

const MemberPage = (props) => {
  useEffect(() => {
    props.GetMember();
  }, []);
  const renderMembers = props.data?.map((member) => {
    return (
      <ItemMember key={member._id} name={member.name} role={member?.role} />
    );
  });

  return (
    <div>
      <section className="pager-section">
        <div className="container">
          <div className="pager-content text-center">
            <h2>Thành viên</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>Members</span>
              </li>
            </ul>
          </div>
          {/*pager-content end*/}
          <h2 className="page-titlee">DSC</h2>
        </div>
      </section>
      {/*pager-section end*/}
      {props.data === undefined ? (
        <Loading />
      ) : (
        <section className="page-content">
          <div className="container">
            <div className="teachers-section p-0">
              <div className="teachers">
                <div className="row">
                  {renderMembers}

                  {/*teacher end*/}
                </div>
              </div>
              {/*teachers end*/}
            </div>
            {/*teachers-section end*/}
            {/* <Pagiation /> */}
            {/*pagination-end*/}
          </div>
        </section>
      )}
      {/*page-content end*/}

      {/*newsletter-sec end*/}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { data: state.members.data, status: state.members.status };
};
export default connect(mapStateToProps, { GetMember })(MemberPage);
