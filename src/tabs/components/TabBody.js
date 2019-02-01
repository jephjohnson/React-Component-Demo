import React from "react";
import PropTypes from "prop-types";

const TabBody = ({ title, id, children }) => (
  <section
    id={"section" + id}
    role="tabpanel"
    tabIndex="-1"
    aria-labelledby={id}
  >
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

TabBody.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default TabBody;
