import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon, List } from 'semantic-ui-react'

const tech = <span>
  <TechLabel title={'Unity'} src={'./img/unity.png'}></TechLabel>
  <TechLabel title={'C#'} src={'./img/csharp.png'}></TechLabel>
</span>

const en = {
  image: './img/sc.png',
  title: '3D Unity Videogame',
  techs: tech,
  subtitle: 'Super Kart Racing: simple timed racing game',
  desc: <span>Made in <em>Unity</em>, programmed with <em>C#</em>. Race against other AI driven karts, on a selected number of laps, adjust acceleration, max speed, and steering. Highscore saves and displays in table to compare with other players scores.</span>,
  extra: <List horizontal>
    <List.Item><a href={'https://github.com/santistebanc/superCar'}><Icon name="github square"/>github repo</a></List.Item>
    <List.Item><a href={'http://santistebanc.tk/superCar'}><Icon name="play"/>run demo</a></List.Item>
  </List>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
