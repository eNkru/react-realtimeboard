import React, { PropTypes } from "react";
import { Segment, Item, Label, List, Divider} from "semantic-ui-react"

const CSRPanel = ({csr}) => {

  return (
    <Segment color="blue">
      {csr.hopServices && <Label as='a' color='orange' ribbon="right">HOP Available</Label>}
      <Item>
        <Item.Content>
          <Item.Header as="a">{csr.name}</Item.Header>
          <Label icon="marker" content={csr.suburb}></Label>
          <Divider/>
          <Item.Description>
            <List>
              <List.Item>
                <List.Icon name='address card' />
                <List.Content>{csr.address}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='phone' />
                <List.Content>{csr.phone}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='clock' />
                <List.Content>{csr.openHours}</List.Content>
              </List.Item>
            </List>
          </Item.Description>
        </Item.Content>
      </Item>
    </Segment>
  );
};

CSRPanel.propTypes = {
  csr: PropTypes.object.isRequired
};

export default CSRPanel;
