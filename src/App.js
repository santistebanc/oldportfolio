import React, { Component } from 'react';
import './App.css';

import { Container } from 'semantic-ui-react'
import Head from './Head.js';
import Foot from './Foot.js';
import MenuBar from './MenuBar.js';
import Projects from './Projects.js';
import Aboutme from './Aboutme.js';
import MyStory from './MyStory.js';

class App extends Component {

  state = { activeTab: 'projects' }

  handleChangeMenuTab = (name)=>{
    this.setState({ activeTab: name });
  }

  render() {
    const tabs = {
      'projects': <Projects/>,
      'aboutme':  <Aboutme/>,
      'mystory': <MyStory/>
    }
    const content = tabs[this.state.activeTab];

    return (
      <div className="App">
        <section className="head-section">
        <Head/>
        </section>
        <section className="projects-section">
          <Container>
            <MenuBar activeTab={this.state.activeTab}  onChangeTab={this.handleChangeMenuTab}/>
            <br/>
            {content}
          </Container>
        </section>
        <section className="foot-section">
        <Foot/>
        </section>
      </div>
    );
  }
}

export default App;
