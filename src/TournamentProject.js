import React from 'react'
import ProjectItem from './ProjectItem.js'
import { Icon } from 'semantic-ui-react'

const en = {
  image: './img/tourgen.png',
  title: 'Tournament Generator',
  subtitle: 'Round-Robin style tournament bracket generator',
  desc: <span>Built with React.js and Baobab data tree. Uses Web Workers to run the bracket-generating algorithm without blocking the app. The user inputs the names of the players, sets the size of groups and number of them in each cycle. Then with the click of a button the players are arranged randomly in groups taking care of minimizing the amount of repetitions; that is, two players should not play against each other more than once in a round.</span>,
  extra: <span><a href={'https://github.com/santistebanc/roundrobinmodified'}><Icon name="github square"/>github repo</a></span>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
