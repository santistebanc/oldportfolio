import React from 'react';

import { Label, Container } from 'semantic-ui-react';

const en = {
}

const SkillLabel = ({image, title}) => <Label basic image className='skillLabel' size='medium'>
    <img src={image}/>{title}
  </Label>;

const Knowledge = () => (
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
      </Container>
    );

const content = {en};

export default ({lang}) => <Knowledge {...content[lang]}/>
