import React, { Component } from 'react';
import './App.css';

import { Header, Divider, Container, Icon, Item } from 'semantic-ui-react'
import Head from './Head.js';
import TriviaAppProject from './TriviaAppProject.js';
import MinigamesProject from './MinigamesProject.js';
import TournamentProject from './TournamentProject.js';
import MiniTanksProject from './MiniTanksProject.js';
import KartRacingProject from './KartRacingProject.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="head-section">
        <Head/>
        </section>
        <section className="projects-section">
          <Container>
            <Divider horizontal><Header size={'big'}><Icon name='travel'/>PROJECTS</Header></Divider>
          <Item.Group>
            <TriviaAppProject lang={'en'}/>
            <MinigamesProject lang={'en'}/>
            <TournamentProject lang={'en'}/>
            <MiniTanksProject lang={'en'}/>
            <KartRacingProject lang={'en'}/>
          </Item.Group>
          </Container>
        </section>
      </div>
    );
  }
}

export default App;
