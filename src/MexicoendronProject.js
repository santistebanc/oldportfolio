import React from 'react'
import ProjectItem from './ProjectItem.js'
import TechLabel from './TechLabel.js'
import { Icon, List } from 'semantic-ui-react'

const tech = <span>
  <TechLabel title={'Next'} src={'./img/next.png'}></TechLabel>
  <TechLabel title={'Express'} src={'./img/express.png'}></TechLabel>
  <TechLabel title={'React'} src={'./img/react.png'}></TechLabel>
  <TechLabel title={'AWS SDK'} src={'./img/aws.png'}></TechLabel>
</span>

const en = {
  image: './img/mexicoendron.png',
  title: 'México en Dron',
  year: '2017',
  techs: tech,
  subtitle: 'Universal Web App for Stock-Video business',
  desc: <span>Web App displaying a collection of short videos that show scenes of Mexico filmed with flying drones. It is still in early development and has not been released. Built with <em>Next.js</em> to achieve isomorphic design, <em>Express</em> for the server-side and <em>React</em> for views.</span>,
  extra: <List horizontal>
    <List.Item><a target="_blank" href={'https://github.com/santistebanc/mexicoendron_preview'}><Icon name="github square"/>github repo</a></List.Item>
    <List.Item><a target="_blank" href={'https://mexicoendron1.now.sh/'}><Icon name="play"/>run demo</a></List.Item>
  </List>
}

const content = {en};

export default ({lang}) => <ProjectItem {...content[lang]}/>
