import React, {PropTypes} from 'react';
import AgencyCard from './AgencyCard';

const AgencyPanel = ({agencies}) => {
  return (
    <div className="row">
      {agencies.map((agency) => {
        return <AgencyCard key={agency.agency_id} agency={agency}/>;
      })}
    </div>
  );
};

AgencyPanel.propTypes = {
  agencies: PropTypes.array.isRequired
};

export default AgencyPanel;
