import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon, List } from 'semantic-ui-react'

const tech = <span>
  <TechLabel title={'mermaid.js'} src={'./img/mermaid.png'}></TechLabel>
  <TechLabel title={'Semantic UI'} src={'./img/semanticui.png'}></TechLabel>
</span>

const en = {
  image: './img/automatas.png',
  title: 'Automata Simluator',
  techs: tech,
  subtitle: 'Create states, input, and functions to visualize state-machines',
  desc: <span>Deterministic, Nondeterministic, finite  Automaton, pushdown Automaton and Turing machine simulator in javascript. Visualization graph made with <em>mermaid.js</em></span>,
  extra: <List horizontal>
    <List.Item><a href={'https://github.com/santistebanc/automatas'}><Icon name="github square"/>github repo</a></List.Item>
    <List.Item><a href={'http://santistebanc.tk/automatas'}><Icon name="play"/>run demo</a></List.Item>
  </List>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
