import React from 'react'
import { Item, Grid, Header } from 'semantic-ui-react'

const ProjectItem = ({image, title, techs, subtitle, desc, extra, year}) => (
  <Item>
    <Grid doubling columns={2}>
    <Grid.Column width={7}>
      <Item.Image bordered size="big" src={image} />
    </Grid.Column>
    <Grid.Column width={9}>
      <Item.Content>
        <Header dividing className="blue" size="small">{title} <span className="yearinheader">{year}</span></Header>
        <div>{techs}</div>
        <Item.Meta>{subtitle}</Item.Meta>
        <Item.Description>{desc}</Item.Description>
        <Item.Extra className='extra'>{extra}</Item.Extra>
      </Item.Content>
    </Grid.Column>
  </Grid>
  </Item>
)
 export default ProjectItem;
