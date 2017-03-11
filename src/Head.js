import React, { Component } from 'react';
import { Button, Header, Container } from 'semantic-ui-react'

class Head extends Component {
  handleResumeClick(){
    window.location = '/Portfolio.pdf';
  }
  handleGithubClick(){
    window.location = 'https://github.com/santistebanc';
  }
  render() {
    return <Container>
        <Header size={'huge'} inverted>Carlos Santisteban</Header>
        <Button color='linkedin' compact icon='linkedin' size={'big'}/>
        <Button color='instagram' compact icon='github' size={'big'} onClick={this.handleGithubClick}/>
        <Button color='vk' compact icon='address book outline' size={'big'} onClick={this.handleResumeClick}/>
      </Container>
  }
}

export default Head;
