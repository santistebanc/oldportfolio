import React from 'react'
import { Container, Grid, Header, Icon } from 'semantic-ui-react';

const en = {
  currently: <span>I am currently looking for a permanent job in Web Development, do not hesitate to contact me if you are interested.</span>,
}

const Contact = ({ currently, consider, distracted, curious, goals }) => <Container> 
  <Header size="medium">Contact</Header>
<Grid>
  <Grid.Column>
    <Container>
      <address style={{fontSize: '1.5em', lineHeight: '1.7em'}}>
              <Icon name="mail"/> <a>carlos.santisteban@outlook.com</a>
              <br/>
              <Icon name="call"/> +52 444 414 8322
              <br/>
              <Icon name="call"/> +49 157 7235 9664
            </address>
            <br/>
      <p>{currently}</p>
    </Container>
  </Grid.Column>
</Grid>
</Container>

const content = { en };

export default ({ lang }) => <Contact {...content[lang]} />
