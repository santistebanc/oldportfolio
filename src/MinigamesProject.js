import React from 'react'
import ProjectItem from './ProjectItem.js'
import { Icon } from 'semantic-ui-react'

const en = {
  image: './img/minigamesscreen.png',
  title: 'Minigames',
  subtitle: 'HTML5 Canvas Mobile game',
  desc: <span>Mobile game developed with Phaser.js framework. A prototype game that consists of a series of 'minigames' where the player has to complete a challenge in a certain amount of time to earn points. The game is designed to run in all major mobile platforms and on the web.</span>,
  extra: <span><a href={'https://github.com/santistebanc/minigames'}><Icon name="github square"/>github repo</a></span>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
