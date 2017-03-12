import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon } from 'semantic-ui-react'

const as3 = <TechLabel title={'Actionscript 3'} src={'./img/actionscript.png'}></TechLabel>

const en = {
  image: './img/tanks.png',
  title: '2D Flash Videogame',
  techs: [as3],
  subtitle: 'MiniTanks: Arcade Shooter Survival game',
  desc: <span>Made in Adobe Flash with <em>Actionscript 3</em>. Survive the longest while enemy tanks appear and shoot you. Extra weapons, life packs and perks appear randomy on the field.</span>,
  extra: <span><a href={'https://github.com/santistebanc/miniTanks'}><Icon name="github square"/>github repo</a>
  <a href={'http://santistebanc.tk/miniTanks'}><Icon name="play"/>run demo</a></span>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
