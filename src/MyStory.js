import React, { Component } from 'react';

import { Header, Divider, Container, Icon, Segment } from 'semantic-ui-react'

import story from './story.md'

console.log(story);

// const converter = new showdown.Converter();

const content = "";

export default class MyStory extends Component {

  render() {
    return (
      <Container className="nomargin">
        <Segment>
          <br/>
          <Container text>
            {content}
          </Container>
          <br/>
        </Segment>
      </Container>
    );
  }
}
