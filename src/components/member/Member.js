import { connect } from "react-redux";
import ItemMember from "./ItemMember";
import { useEffect } from "react";
import { GetMember } from "../../actions";
import Loading from "../loader/Loading";

const Member = (props) => {
  useEffect(() => {
    props.GetMember();
  }, []);
  const renderMembers = props.data?.slice(0, 4).map((member) => {
    return (
      <ItemMember key={member._id} name={member.name} role={member?.role} />
    );
  });
  return (
    <div>
      {props.data === undefined ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="sec-title">
            <h2>Thành viên</h2>
            <p>
              Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris,
              a laoreet erat ornare sit amet. Nulla sagittis faucibus lacus
            </p>
          </div>
          {/*pager-section end*/}

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

            {/*pagination-end*/}
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { data: state.members.data, status: state.members.status };
};
export default connect(mapStateToProps, { GetMember })(Member);
