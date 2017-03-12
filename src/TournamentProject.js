import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon } from 'semantic-ui-react'

const tech = <span>
  <TechLabel title={'React'} src={'./img/react.png'}></TechLabel>
  <TechLabel title={'Baobab'} src={'./img/baobab.jpg'}></TechLabel>
</span>

const en = {
  image: './img/tourgen.png',
  title: 'Tournament Generator',
  techs: tech,
  subtitle: 'Round-Robin style tournament bracket generator',
  desc: <span>Built with <em>React.js</em> and <em>Baobab</em> data tree. Uses Web Workers to run the bracket-generating algorithm without blocking the app. The user inputs the names of the players, the size and number of groups in each cycle. The players are arranged randomly in groups taking care of minimizing the amount of repetitions.</span>,
  extra: <span><a href={'https://github.com/santistebanc/roundRobin'}><Icon name="github square"/>github repo</a>
  <a href={'http://santistebanc.tk/roundRobin'}><Icon name="play"/>run demo</a></span>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
