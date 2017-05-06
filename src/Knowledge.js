import React from 'react';

import { Label, Container, List } from 'semantic-ui-react';

const en = {
  studies: <span>Estudiante de 10° Semestre de <i>Ingeniería en Tecnologías de Información y Comunicación</i> en el <strong className="blue">Tecnológico de Monterrey</strong> (Graduación Mayo 2017)</span>,
  experienceTitle: 'Experienced with Web Development tools:',
  experienceList: ['Package Managers (npm)','Task Runners (Grunt, Gulp)','Compilers (Babel)','Bundlers (Webpack)','Code Quality (ESLint)','Version Control (Git)',,'Utility Libraries (Underscore)','Templating (Handlebars)','CSS Frameworks (Bootstrap, Semantic UI)'],
  conceptsTitle: 'Familiar with Web Development concepts:',
  conceptsList: ['asynchronicity','modularization and components','client-server interaction','API use and development','responsive design', 'testing','DOM Manipulation','hosting and deployment']
}

const SkillLabel = ({image, title}) => <Label basic image className='skillLabel' size='medium'>
    <img src={image}/>{title}
  </Label>;

const Knowledge = ({experienceTitle, experienceList, conceptsTitle, conceptsList}) => (
      <Container fluid>
        <SkillLabel image={"./img/node.png"} title={"node"}/>
        <SkillLabel image={"./img/react.png"} title={"React"}/>
        <SkillLabel image={"./img/express.png"} title={"Express"}/>
        <SkillLabel image={"./img/d3.png"} title={"D3"}/>
        <SkillLabel image={"./img/meteor.svg"} title={"Meteor"}/>
        <SkillLabel image={"./img/javascript.png"} title={"ES6 | ES7"}/>
        <SkillLabel image={"./img/sass.svg"} title={"less / sass"}/>
        <SkillLabel image={"./img/git.png"} title={"git"}/>
        <SkillLabel image={"./img/php.svg"} title={"PHP"}/>
        <SkillLabel image={"./img/csharp.png"} title={"C#"}/>
        <SkillLabel image={"./img/jquery.png"} title={"jquery"}/>
        <SkillLabel image={"./img/mysql.png"} title={"mySQL"}/>
        <SkillLabel image={"./img/mongodb.png"} title={"mongoDB"}/>
        <SkillLabel image={"./img/actionscript.png"} title={"Actionscript 3"}/>
        <SkillLabel image={"./img/phaser.png"} title={"Phaser"}/>
        <SkillLabel image={"./img/unity.png"} title={"Unity"}/>
        <SkillLabel image={"./img/office.png"} title={"MS Office"}/>
        <br/><br/>
        <div className="explist">
        <List.Description>{experienceTitle}</List.Description>
        <List bulleted>
          {experienceList.map(item=><List.Item>{item}</List.Item>)}
        </List><br/><br/>
        <List.Description>{conceptsTitle}</List.Description>
        <List bulleted>
            {conceptsList.map(item=><List.Item>{item}</List.Item>)}
        </List>
      </div>
      </Container>
    );

const content = {en};

export default ({lang}) => <Knowledge {...content[lang]}/>
