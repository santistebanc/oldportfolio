import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react';

const en = {
  passionate: <span>I am passionate about web technologies, always looking for the latest developments in the world of Javascript, like new frameworks, tools, or best practices for coding.</span>,
  consider: <span>I consider myself a sensible and practical person, I like to make rational and informed decisions. I am friendly, kind and open-minded. I can be imaginative when coming up with new ideas and creative when finding solutions to problems.</span>,
  distracted: <span>I am also sort of a distracted person, it takes me a while to concentrate on a task, and it happens all too often that I forget certain appointments or things I had to do, and then I have to apologize for my carelessness. But I am working on it, it is not very serious and with a little organization, I can overcome this flaw fairly well.</span>,
  curious: <span>One other particular thing about myself, is that I am relentlessly curious. I want to know how it all works; science, history, politics, philosophy, mathematics; everyday I learn a little bit more about those. I am most fascinated by the exciting new advances in science and technology, and the mind-blowing current events in the world.</span>,
  goals: <span>Right now, my first goals in life, are on one side, professionally: grow in my career, seek new job opportunities, gain expertise, earn a living. But on the other side, most importantly, I want to grow personally: I have been living a kind of spoiled, very comfortable life in my hometown, not really facing many challenges. So now I am seeking to throw myself out there and learn to be a great person.</span>,
}

const AboutMe = ({ passionate, consider, distracted, curious, goals }) => <Container> 
  <Header size="medium">About me</Header>
<Grid doubling columns={2}>
  <Grid.Column>
    <Container>
      <p>{passionate}</p>
      <p>{consider}</p>
      <p>{distracted}</p>
    </Container>
  </Grid.Column>
  <Grid.Column>
    <Container>
      <p>{curious}</p>
      <p>{goals}</p>
    </Container>
  </Grid.Column>
</Grid>
</Container>

const content = { en };

export default ({ lang }) => <AboutMe {...content[lang]} />
