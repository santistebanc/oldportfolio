import React from 'react';

import { Label, Container, List, Grid } from 'semantic-ui-react';

const en = {
  experienceTitle: 'Adept with Web Development tools:',
  experienceList: ['Package Managers (npm, yarn)','Task Runners (Grunt, Gulp)','Compilers (Babel)','Bundlers (Webpack)','Code Quality (ESLint)','Version Control (Git)','Utility Libraries (Lodash, Underscore)','Templating (Handlebars)','CSS Frameworks (Bootstrap, Semantic UI, ...)','Continuous Integration (Travis-CI)'],
  conceptsTitle: 'Familiar with Web Development concepts:',
  conceptsList: ['Asynchronicity','Modularization and Components','Functional Programming, Immutability', 'Client-Server Interaction','Universal/Isomorphic Apps','API Use and Development (REST)','Responsive Design','Routing', 'Unit-Testing','DOM Manipulation','Hosting and Deployment']
}

const Stats = ({experienceTitle, experienceList, conceptsTitle, conceptsList}) => (
  <Container>
      <Grid doubling columns={2}>
        <Grid.Column>
          <Container fluid>
            <div className="explist">
            <List.Description><strong className="profilepoint">{experienceTitle}</strong></List.Description>
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
            <List.Description><strong className="profilepoint">{conceptsTitle}</strong></List.Description>
            <List bulleted>
                {conceptsList.map(item=><List.Item>{item}</List.Item>)}
            </List>
          </div>
          </Container>
        </Grid.Column>
      </Grid>
      </Container>
    );

const content = {en};

export default ({lang}) => <Stats {...content[lang]}/>
