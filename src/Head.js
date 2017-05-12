import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react'
import './Head.css'

class Head extends Component {
  handleResumeClick(){
    window.location = '/Resume.pdf';
  }
  handleGithubClick(){
    window.location = 'https://github.com/santistebanc';
  }
  render() {
    return <Container>
        <Header size={'huge'} inverted className={"nice-header smallen"}>Carlos Santisteban</Header>
        <div><span style={{fontSize: '1.5em', color:"#eee"}}>Web Developer with focus on <strong style={{color:"#8adb3b"}}>Front-End</strong></span></div>
      </Container>
  }
}

export default Head;
