import React from 'react'
import ProjectItem from './ProjectItem.js'
import { Icon } from 'semantic-ui-react'

const en = {
  image: './img/triviaApp.png',
  title: 'TriviaApp',
  subtitle: 'Trivia mobile game with landing page',
  desc: <span>Game of simple multiple choice questions. Developed with <em>jQuery Mobile</em> and deployed for mobile with <em>Phonegap</em>. Uses a spreadsheet in google docs as database for the questions. There is also a mockup landing page with links to download the app.</span>,
  extra: <span><a href={'https://github.com/santistebanc/Trivia'}><Icon name="github square"/>github repo</a></span>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
