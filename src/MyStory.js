import React, { Component } from 'react';

import { Header, Divider, Container, Icon, Segment } from 'semantic-ui-react'

import story from './story.md'

const content = <div dangerouslySetInnerHTML={{__html: story}} />;

export default class MyStory extends Component {

  render() {

    return (
      <Container className="nomargin">
        <Segment>
          <br/>
          <Container text style={{paddingLeft: 20, paddingRight: 20}}>
            {content}
          </Container>
          <br/>
        </Segment>
      </Container>
    );
  }
}
