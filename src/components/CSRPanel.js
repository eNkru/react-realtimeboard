import React, { PropTypes } from "react";

const CSRPanel = ({csr}) => {

  return (
    <li>{csr.name}</li>
  );
};

CSRPanel.propTypes = {
  csr: PropTypes.object.isRequired
};

export default CSRPanel;
