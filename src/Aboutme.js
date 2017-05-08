import React, { Component } from 'react';
import Profile from './Profile.js';
import Experience from './Experience.js';
import Knowledge from './Knowledge.js';

import { Header, Divider, Container, Icon, Segment, Grid } from 'semantic-ui-react'

export default class Aboutme extends Component {

  render() {
    return (
      <Container className="nomargin">
        <Segment style={{paddingLeft: 30, paddingRight: 30}}>
          <br/>
          <Grid doubling columns={2}>
            <Grid.Column>
              <Profile lang={'en'}/>
              <br/>
            </Grid.Column>
            <Grid.Column>
              <Header size="medium">Frameworks, libraries and languages</Header>
              <Knowledge lang={'en'}/>
              <br/>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column>
              <Header size="medium">Education and Professional Experience</Header>
              <Experience lang={'en'}/>
              <br/>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
