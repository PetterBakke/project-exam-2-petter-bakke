// import PropTypes from "prop-types";

function ValidationError({children}) {
  return <div className="form-error">{children}</div>;
}

// ValidationError.PropTypes = {
//   children: PropTypes.node.isRequired,
// };

export default ValidationError;