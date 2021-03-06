import React, { PropTypes } from "react";
import { Segment, Item, Label, List, Divider, Grid, Icon} from "semantic-ui-react";
import GoogleMapReact from 'google-map-react';

const CSRPanel = ({csr}) => {

  return (
    <Segment color="blue">
      {csr.hopServices && <Label as="a" color="orange" ribbon>HOP Available</Label>}
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={6}>
            <Item>
              <Item.Content>
                <Item.Header as="a">{csr.name}</Item.Header>
                <Label attached="top right" icon="marker" content={csr.suburb}/>
                <Divider/>
                <Item.Description>
                  <List>
                    <List.Item>
                      <List.Icon name="address card" />
                      <List.Content>{csr.address}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="phone" />
                      <List.Content>{csr.phone}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="clock" />
                      <List.Content>{csr.openHours}</List.Content>
                    </List.Item>
                  </List>
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
          <Grid.Column width={10}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDAHj2LVnmfXnbK_hlG4BS5re4xiStVO6Q"
              }}
              defaultCenter={{lat: csr.latitude, lng: csr.longitude}}
              defaultZoom={16}
              style={{height: '300px'}}>
              <Icon size="big" name="info circle" lat={csr.latitude} lng={csr.longitude}/>
            </GoogleMapReact>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

CSRPanel.propTypes = {
  csr: PropTypes.object.isRequired
};

export default CSRPanel;
