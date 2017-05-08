import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon, List } from 'semantic-ui-react'

const as3 = <span><TechLabel title={'Actionscript 3'} src={'./img/actionscript.png'}></TechLabel></span>

const en = {
  image: './img/tanks.png',
  title: '2D Flash Videogame',
  techs: as3,
  year: '2015',
  subtitle: 'MiniTanks: Arcade Shooter Survival game',
  desc: <span>Made in Adobe Flash with <em>Actionscript 3</em>. Survive the longest while enemy tanks appear and shoot you. Extra weapons, life packs and perks appear randomy on the field.</span>,
  extra: <List horizontal>
    <List.Item><a target="_blank" href={'https://github.com/santistebanc/miniTanks'}><Icon name="github square"/>github repo</a></List.Item>
    <List.Item><a target="_blank" href={'http://santistebanc.tk/miniTanks'}><Icon name="play"/>run demo</a></List.Item>
  </List>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
