import React, { Component } from 'react';
import Profile from './Profile.js';
import Experience from './Experience.js';
import Knowledge from './Knowledge.js';
import Stats from './Stats.js';
import About from './About.js';
import Contact from './Contact.js';

import { Header, Divider, Container, Icon, Segment, Grid } from 'semantic-ui-react'

export default class Aboutme extends Component {

  render() {
    return (
      <Container className="nomargin">
        <Segment className="paddingsegment">
          <br/>
          <Grid doubling columns={2}>
            <Grid.Column>
              <Profile lang={'en'}/>
              <br/>
            </Grid.Column>
            <Grid.Column>
              <Knowledge lang={'en'}/>
              <br/>
            </Grid.Column>
          </Grid>
          <Stats lang={'en'}/>
          <br/>
          <br/>
          <Grid>
            <Grid.Column>
              <Header size="medium">Education and Professional Experience</Header>
              <Experience lang={'en'}/>
              <br/>
            </Grid.Column>
          </Grid>
          <About lang={'en'}/>
          <br/>
          <Contact lang={'en'}/>
          <br/>
        </Segment>
      </Container>
    );
  }
}
