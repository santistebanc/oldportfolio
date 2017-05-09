import React from 'react';

import { Label, Container, List, Grid } from 'semantic-ui-react';

const en = {
  experienceTitle: 'Experienced with Web Development tools:',
  experienceList: ['Package Managers (npm)','Task Runners (Grunt, Gulp)','Compilers (Babel)','Bundlers (Webpack)','Code Quality (ESLint)','Version Control (Git)',,'Utility Libraries (Underscore)','Templating (Handlebars)','CSS Frameworks (Bootstrap, Semantic UI)'],
  conceptsTitle: 'Familiar with Web Development concepts:',
  conceptsList: ['asynchronicity','modularization and components','client-server interaction','API use and development','responsive design', 'testing','DOM Manipulation','hosting and deployment']
}

const Stats = ({experienceTitle, experienceList, conceptsTitle, conceptsList}) => (
      <Grid doubling columns={2}>
        <Grid.Column>
          <Container fluid>
            <div className="explist">
            <List.Description>{experienceTitle}</List.Description>
            <List bulleted>
              {experienceList.map(item=><List.Item>{item}</List.Item>)}
            </List>
          </div>
          </Container>
        </Grid.Column>
        <br/><br/>
        <Grid.Column>
          <Container fluid>
            <div className="explist">
            <List.Description>{conceptsTitle}</List.Description>
            <List bulleted>
                {conceptsList.map(item=><List.Item>{item}</List.Item>)}
            </List>
          </div>
          </Container>
        </Grid.Column>
      </Grid>
    );

const content = {en};

export default ({lang}) => <Stats {...content[lang]}/>
