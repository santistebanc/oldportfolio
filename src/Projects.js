import React, { Component } from 'react';

import { Header, Divider, Container, Icon, Item, Segment } from 'semantic-ui-react'
import TriviaAppProject from './TriviaAppProject.js';
import MinigamesProject from './MinigamesProject.js';
import TournamentProject from './TournamentProject.js';
import MiniTanksProject from './MiniTanksProject.js';
import KartRacingProject from './KartRacingProject.js';
import AutomatasProject from './AutomatasProject.js';
import MozoProject from './MozoProject.js';

export default class Projects extends Component {

  render() {
    return (
        <Container>
          <Segment>
          {/* <Divider horizontal><Header size='medium'><Icon name='travel'/>PROJECTS</Header></Divider> */}
          <Item.Group>
            <MozoProject lang={'en'}/>
            <TriviaAppProject lang={'en'}/>
            <MinigamesProject lang={'en'}/>
            <KartRacingProject lang={'en'}/>
            <MiniTanksProject lang={'en'}/>
            <AutomatasProject lang={'en'}/>
            <TournamentProject lang={'en'}/>
          </Item.Group>
        </Segment>
      </Container>
    );
  }
}
