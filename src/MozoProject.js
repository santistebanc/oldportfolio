import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon, List } from 'semantic-ui-react'

const tech = <span>
  <TechLabel title={'React'} src={'./img/react.png'}></TechLabel>
  <TechLabel title={'Meteor'} src={'./img/meteor.svg'}></TechLabel>
  <TechLabel title={'Ionic'} src={'./img/ionic.png'}></TechLabel>
</span>

const en = {
  image: './img/mozo.png',
  title: 'MozoApp',
  year: '2016',
  techs: tech,
  subtitle: 'Mobile hibrid App for Restaurants',
  desc: <span>App to order food in a restaurant directly from your smartphone, without the need of a waiter. Built with <em>Meteor</em> for back-end and <em>React</em> for front end. CSS styling and GUI with <em>Ionic</em></span>,
  extra: <List horizontal>
    <List.Item><a target="_blank" href={'https://github.com/santistebanc/mozo'}><Icon name="github square"/>github repo</a></List.Item>
    <List.Item><a target="_blank" href={'http://santistebanc.tk/mozoapp-demo'}><Icon name="play"/>run demo</a></List.Item>
  </List>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
