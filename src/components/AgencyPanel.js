import React, {PropTypes} from 'react';
import AgencyCard from './AgencyCard';
import {Grid} from 'semantic-ui-react';

const AgencyPanel = ({agencies}) => {
  return (
    <Grid stackable columns={3}>
      {agencies.map((agency) => {
        return <AgencyCard key={agency.agency_id} agency={agency}/>;
      })}
    </Grid>
  );
};

AgencyPanel.propTypes = {
  agencies: PropTypes.array.isRequired
};

export default AgencyPanel;
