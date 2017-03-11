import React, { Component } from 'react';
import './App.css';

import { Button, Header, Icon, Divider } from 'semantic-ui-react'

class App extends Component {
  handleResumeClick(){
    window.location = '/Portfolio.pdf';
  }
  handleGithubClick(){
    window.location = 'https://github.com/santistebanc';
  }
  render() {
    return (
      <div className="App">
        <Header className={'name-header'} size={'huge'} inverted>Carlos Santisteban</Header>
        <Button color='linkedin' compact icon='linkedin' size={'huge'}/>
        <Button color='instagram' compact icon='github' size={'huge'} onClick={this.handleGithubClick}/>
        <Button color='vk' compact icon='address book outline' size={'huge'} onClick={this.handleResumeClick}/>
        <br/><br/>
        <Divider horizontal><Header size={'big'} inverted><Icon name='travel'/>PROJECTS</Header></Divider>
      </div>
    );
  }
}

export default App;
