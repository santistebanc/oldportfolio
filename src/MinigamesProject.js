import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon } from 'semantic-ui-react'

const tech = <span>
  <TechLabel title={'HTML5'} src={'./img/html5.png'}></TechLabel>
  <TechLabel title={'Phaser'} src={'./img/phaser.png'}></TechLabel>
</span>

const en = {
  image: './img/minigamesscreen.png',
  title: 'Minigames',
  techs: tech,
  subtitle: 'HTML5 Canvas Mobile game',
  desc: <span>Prototype Mobile game developed with <em>Phaser.js</em>. Earn points completing a series of 'minigames' in a certain amount of time. Designed to run in all major mobile platforms and on the web.</span>,
  extra: <span><a href={'https://github.com/santistebanc/minigames'}><Icon name="github square"/>github repo</a>
  <a href={'http://santistebanc.tk/minigames'}><Icon name="play"/>run demo</a></span>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
