import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react'

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
      </Container>
  }
}

export default Head;
