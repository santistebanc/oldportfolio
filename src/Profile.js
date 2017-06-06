import React from 'react'
import { Label, Flag, List, Icon, Statistic } from 'semantic-ui-react';


const LanguageLabel = ({icon, title, desc}) => <Label basic image size="large" className='languageLabel'>
    <Flag name={icon} size="large"/> <strong>{title}</strong><i style={{fontWeight: 'normal', marginLeft: 5}}>{desc}</i>
  </Label>;

const en = {
  developer: <p><span className="profileheader">Enthusiastic <strong className="green">Front-End</strong> developer, experienced in developing <strong>Web Apps</strong> using various web technologies.</span></p>,
  bsdegree:<span className="profilepoint">Just received my <strong>Bachelor's Degree in <i>Informatics Engineering.</i></strong></span>,
  age: <span>I am <strong>23 years old</strong> born in <strong>Mexico</strong>. I hold a second nationality from <strong>Spain</strong>, therefore I am recognized as a <strong>citizen of the European Union</strong></span>,
  hybrid: <span>Experienced mostly on building <strong>Web Apps</strong> using the <strong>MERN</strong> stack.</span>,
  games: <span>Skilled in design and development of <strong>2D/3D videogames.</strong></span>,
  passionate: <span>I am passionate about web technologies, always looking for the latest developments in the world of <strong>Javascript</strong>, like new frameworks, tools, or best practices for coding.</span>,
  wdyears: "5+ years",
  wdexperience: "doing Web Development projects",
  profyears: "~1 year",
  profexperience: "of Professional Experience",
  languages: <span><p>I speak </p><p>
    <LanguageLabel icon='es' title='Spanish' desc='native'/>
    <LanguageLabel icon='gb' title='English' desc='fluent'/>
    <LanguageLabel icon='de' title='German' desc='B2'/>
    <LanguageLabel icon='fr' title='French' desc='A2'/></p></span>,
  qualities: 'Curious, proactive, creative, friendly, responsible'
}

const Profile = ({developer, wdyears, wdexperience, profyears, profexperience, bsdegree, languages, qualities, hybrid, games, age}) => <List>
    <List.Item>
      {/* <Icon name='right triangle' /> */}
      <List.Content>{developer}</List.Content>
    </List.Item>
    <br/>
    <List.Item className="centertext">
      {/* <Icon name='right triangle' /> */}
      <List.Content>
        <Statistic>
          <Statistic.Value>{wdyears}</Statistic.Value>
          <Statistic.Label>{wdexperience}</Statistic.Label>
        </Statistic>
      </List.Content>
    </List.Item>
  <br/>
    <List.Item className="centertext">
      {/* <Icon name='right triangle' /> */}
      <List.Content>
        <Statistic>
          <Statistic.Value>{profyears}</Statistic.Value>
          <Statistic.Label>{profexperience}</Statistic.Label>
        </Statistic>
      </List.Content>
    </List.Item>
    <br/>
    <br/>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{bsdegree}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{hybrid}</List.Content>
    </List.Item>
    <List.Item>
      <Icon name='right triangle' />
      <List.Content>{games}</List.Content>
    </List.Item>
    <br/>
    <List.Item>
      <List.Content>{age}</List.Content>
    </List.Item>
    <br/>
    <List.Item>
      <List.Content>{languages}</List.Content>
    </List.Item>
    {/* <List.Item>
      <List.Content>{qualities}</List.Content>
    </List.Item> */}
  </List>

  const content = {en};

  export default ({lang}) => <Profile {...content[lang]}/>
