import React from 'react'
import { Item, Grid, Image, Header, Container } from 'semantic-ui-react'

const ProjectItem = ({image, title, subtitle, desc, extra}) => (
  <Item>
    <Grid doubling columns={2}>
    <Grid.Column width={7}>
      <Item.Image bordered size="big" src={image} />
    </Grid.Column>
    <Grid.Column width={9}>
      <Item.Content>
        <Header dividing className="blue" size="small">{title}</Header>
        <Item.Meta>{subtitle}</Item.Meta>
        <Item.Description>{desc}</Item.Description>
        <Item.Extra className='extra'>{extra}</Item.Extra>
      </Item.Content>
    </Grid.Column>
  </Grid>
  </Item>
)
 export default ProjectItem;
