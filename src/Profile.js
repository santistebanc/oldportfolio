import React from 'react'
import { Label, Flag, List, Icon, Statistic } from 'semantic-ui-react';


const LanguageLabel = ({icon, title, desc}) => <Label basic image className='languageLabel'>
    <Flag name={icon}/> <strong>{title}</strong><i style={{fontWeight: 'normal', marginLeft: 5}}>{desc}</i>
  </Label>;

const en = {
  developer: <span className="profileheader">Passionate <strong className="green">Front-End</strong> Developer</span>,
  areas: <span>Experienced in design and development of <strong>Web Apps</strong> and <strong>2D/3D videogames</strong></span>,
  wdyears: "5+ years",
  wdexperience: "doing Web Development projects",
  profyears: "~1 year",
  profexperience: "of Professional Experience",
  languages: <span><p>Languages: </p><p>
    <LanguageLabel icon='es' title='Spanish' desc='native'/>
    <LanguageLabel icon='gb' title='English' desc='fluent'/>
    <LanguageLabel icon='de' title='German' desc='B2'/>
    <LanguageLabel icon='fr' title='French' desc='A2'/></p></span>,
  qualities: 'Curious, proactive, creative, friendly, responsible'
}

const Profile = ({developer, wdyears, wdexperience, profyears, profexperience, areas, languages, qualities}) => <List className="centertext">
    <List.Item>
      {/* <Icon name='right triangle' /> */}
      <List.Content>{developer}</List.Content>
    </List.Item>
    <br/>
    <List.Item>
      {/* <Icon name='right triangle' /> */}
      <List.Content>
        <Statistic>
          <Statistic.Value>{wdyears}</Statistic.Value>
          <Statistic.Label>{wdexperience}</Statistic.Label>
        </Statistic>
      </List.Content>
    </List.Item>
  <br/>
    <List.Item>
      {/* <Icon name='right triangle' /> */}
      <List.Content>
        <Statistic>
          <Statistic.Value>{profyears}</Statistic.Value>
          <Statistic.Label>{profexperience}</Statistic.Label>
        </Statistic>
      </List.Content>
    </List.Item>
    <br/>
    <List.Item>
      {/* <Icon name='right triangle' /> */}
      <List.Content>{areas}</List.Content>
    </List.Item>
    <br/>
    <List.Item>
      <List.Content>{languages}</List.Content>
    </List.Item>
    <br/>
    {/* <List.Item>
      <List.Content>{qualities}</List.Content>
    </List.Item> */}
  </List>

  const content = {en};

  export default ({lang}) => <Profile {...content[lang]}/>
