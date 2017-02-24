import React from 'react';

const AgencyPanel = ({agencies}) => {
  return (
    <div>
      {agencies.map((agency) => {
        return <div key={agency.agency_id}>{agency.agency_name} {agency.agency_phone}</div>
      })}
    </div>
  );
}

export default AgencyPanel;
