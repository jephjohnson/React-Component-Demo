import React from "react";
import PropTypes from "prop-types";

const TabPane = ({
  activeTab,
  id,
  onClickTabItem,
  title,
  handleFocus,
  ...rest
}) => (
  <li role="presentation">
    <b
      tabIndex="0"
      id={id}
      aria-selected={activeTab === id ? "true" : null} //ternary operator to set active-state
      onClick={onClickTabItem}
      role="tab"
      {...rest} //spread props
    >
      {title}
    </b>
  </li>
);

TabPane.propTypes = {
  activeTab: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onClickTabItem: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default TabPane;
