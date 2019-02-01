import React from "react";
import PropTypes from "prop-types";

const Status = ({ val }) => {
  return (
    <span role="status">
      <span className="toggletip-bubble">{val}</span>
    </span>
  );
};

Status.propTypes = {
  val: PropTypes.string.isRequired
};

export default Status;
