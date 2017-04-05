import React, { Component } from 'react';
import Profile from './Profile.js';
import Experience from './Experience.js';
import Knowledge from './Knowledge.js';

import { Header, Divider, Container, Icon } from 'semantic-ui-react'

export default class Aboutme extends Component {

  render() {
    return (
        <Container>
          <Divider horizontal><Header size='medium'><Icon name='user'/>ABOUT ME</Header></Divider>
          <Container text>
            <Header size="medium">Profile</Header>
            <Profile lang={'en'}/>
            <br/>
            <Header size="medium">Knowledge</Header>
            <Knowledge lang={'en'}/>
            <br/>
            <Header size="medium">Experience</Header>
            <Experience lang={'en'}/>
            <br/>
          </Container>
      </Container>
    );
  }
}
