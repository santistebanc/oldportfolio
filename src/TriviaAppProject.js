import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon, List } from 'semantic-ui-react'

const tech = <span>
  <TechLabel title={'jQuery mobile'} src={'./img/jquery.png'}></TechLabel>
  <TechLabel title={'Phonegap'} src={'./img/phonegap.png'}></TechLabel>
</span>

const en = {
  image: './img/triviaApp.png',
  title: 'TriviaApp',
  year: '2013',
  techs: tech,
  subtitle: 'Trivia mobile game with landing page',
  desc: <span>Game of simple multiple choice questions. Developed with <em>jQuery Mobile</em> and deployed for mobile with <em>Phonegap</em>. Uses a spreadsheet in google docs as database for the questions. There is also a mockup landing page with links to download the app.</span>,
  extra: <List horizontal>
    <List.Item><a target="_blank" href={'https://github.com/santistebanc/Trivia'}><Icon name="github square"/>github repo</a></List.Item>
    <List.Item><a target="_blank" href={'http://santistebanc.tk/creapp'}><Icon name="bookmark"/>landing page</a></List.Item>
    <List.Item><a target="_blank" href={'http://santistebanc.tk/Trivia'}><Icon name="play"/>run demo</a></List.Item>
  </List>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
