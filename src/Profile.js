import React from 'react'
import { Label, Flag, List, Icon } from 'semantic-ui-react';


const LanguageLabel = ({icon, title, desc}) => <Label basic image className='languageLabel'>
    <Flag name={icon}/> <strong>{title}</strong><i style={{fontWeight: 'normal', marginLeft: 5}}>{desc}</i>
  </Label>;

const en = {
  developer: <span>Web Developer with focus on <strong className="green">Front-End</strong></span>,
  areas: <span>Experienced in design and development of <strong>hybrid applications</strong> (web and mobile) and <strong>2D/3D videogames</strong></span>,
  experience: <span><strong>5+ years</strong> doing Web Development projects and <strong>1 year</strong> of Professional Experience</span>,
  languages: <span>Languages: <span> </span>
    <LanguageLabel icon='es' title='Spanish' desc='native'/>
    <LanguageLabel icon='gb' title='English' desc='fluent (TOEFL: 647)'/>
    <LanguageLabel icon='de' title='German' desc='B2'/>
    <LanguageLabel icon='fr' title='French' desc='A2'/></span>,
  qualities: 'Curious, proactive, creative, friendly, responsible'
}

const Profile = ({developer, experience, areas, languages, qualities}) => <List>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{developer}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{experience}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{areas}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{languages}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{qualities}</List.Content>
    </List.Item>
  </List>

  const content = {en};

  export default ({lang}) => <Profile {...content[lang]}/>
