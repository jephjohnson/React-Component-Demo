import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, popup, label, toolTip, expaned, content }) => {
  return (
    <button
      onClick={onClick}
      aria-haspopup={popup}
      aria-label={label}
      data-toggletip-content={toolTip}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  popup: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  toolTip: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Button;
