import React, { Component } from 'react';

import { Menu, Icon, Button } from 'semantic-ui-react'

export default class MenuBar extends Component {

  handleTabClick = (e, { name }) => {
    this.props.onChangeTab && this.props.onChangeTab(name);
  }

  handleResumeClick(){
    window.location = '/Portfolio.pdf';
  }
  handleGithubClick(){
    window.location = 'https://github.com/santistebanc';
  }
  handleLinkedInClick(){
    window.location = 'https://www.linkedin.com/in/carlos-santisteban';
  }

  render() {
    const { activeTab } = this.props;
    return (
      <Menu color='blue' size="small" stackable>
          <Menu.Item name='aboutme' active={activeTab === 'aboutme'} onClick={this.handleTabClick} className="notstack">
            <Icon name='user' size='large'/>
            Profile
          </Menu.Item>
          <Menu.Item name='projects' active={activeTab === 'projects'} onClick={this.handleTabClick} className="notstack">
            <Icon name='travel' size='large'/>
            Projects
          </Menu.Item>
          {/* <Menu.Item name='mystory' active={activeTab === 'mystory'} onClick={this.handleTabClick}>
            <Icon name='book' size='large'/>
            My Story
          </Menu.Item> */}
          <Menu.Menu position='right' className="notstack">
            {/* <Menu.Item fitted> */}
          <Button.Group>
            <Button basic compact onClick={this.handleResumeClick}>
              <Icon name='file text outline' size='large' />resume
            </Button>
            <Button basic compact onClick={this.handleGithubClick}>
              <Icon name='github' size='large' />
            </Button>
            <Button basic compact onClick={this.handleLinkedInClick}>
              <Icon name='linkedin' size='large' />
            </Button>
          </Button.Group>
          {/* </Menu.Item> */}

          </Menu.Menu>
      </Menu>
    );
  }
}
