import React, {PropTypes} from 'react';
import {Grid, Card, Icon} from 'semantic-ui-react';

const AgencyCard = ({agency}) => {
  const {agency_id, agency_name, agency_phone} = agency;
  return (
    <Grid.Column>
      <Card color="orange">
        <Card.Content header={agency_id}/>
        <Card.Content description={agency_name}/>
        <Card.Content extra>
          <Icon name="phone"/>
          {agency_phone}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

AgencyCard.propTypes = {
  agency: PropTypes.object.isRequired
};

export default AgencyCard;
