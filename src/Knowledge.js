import React from 'react';

import { Label, Container, Header } from 'semantic-ui-react';

const en = {
}

const SkillLabel = ({image, title}) => <Label basic image className='skillLabel' size='small'>
    <img src={image}/>{title}
  </Label>;

const Knowledge = () => (
      <Container fluid>
      <Container fluid>
        <Header size="medium">Frameworks and Libraries</Header>
        <SkillLabel image={"./img/node.png"} title={"Node"}/>
        <SkillLabel image={"./img/react.png"} title={"React"}/>
        <SkillLabel image={"./img/redux.png"} title={"Redux"}/>
        <SkillLabel image={"./img/express.png"} title={"Express"}/>
        <SkillLabel image={"./img/next.png"} title={"Next"}/>
        <SkillLabel image={"./img/meteor.svg"} title={"Meteor"}/>
        <SkillLabel image={"./img/d3.png"} title={"D3"}/>
        <SkillLabel image={"./img/jquery.png"} title={"JQuery"}/>
        <SkillLabel image={"./img/phaser.png"} title={"Phaser"}/>
      </Container>
      <br/>
      <Container fluid>
        <Header size="medium">Tools and Compilers</Header>
        <SkillLabel image={"./img/npm.png"} title={"npm"}/>
        <SkillLabel image={"./img/webpack.png"} title={"Webpack"}/>
        <SkillLabel image={"./img/babel.png"} title={"Babel"}/>
        <SkillLabel image={"./img/git.png"} title={"git"}/>
        <SkillLabel image={"./img/sass.svg"} title={"less / sass"}/>
        <SkillLabel image={"./img/lodash.png"} title={"Lodash / Underscore"}/>
        <SkillLabel image={"./img/cordova.png"} title={"Cordova / Phonegap"}/>
      </Container>
      <br/>
      <Container fluid>
        <Header size="medium">Languages and Software</Header>
        <SkillLabel image={"./img/javascript.png"} title={"Javascript (Vanilla & ES6)"}/>
        <SkillLabel image={"./img/html5.png"} title={"HTML"}/>
        <SkillLabel image={"./img/css.png"} title={"CSS"}/>
        <SkillLabel image={"./img/php.svg"} title={"PHP"}/>
        <SkillLabel image={"./img/csharp.png"} title={"C#"}/>
        <SkillLabel image={"./img/mysql.png"} title={"SQL"}/>
        <SkillLabel image={"./img/mongodb.png"} title={"MongoDB"}/>
        <SkillLabel image={"./img/actionscript.png"} title={"Actionscript"}/>
        <SkillLabel image={"./img/unity.png"} title={"Unity"}/>
        <SkillLabel image={"./img/office.png"} title={"MS Office"}/>
      </Container>
      <br/>
      <Container fluid>
        <Header size="medium">Currently experimenting with</Header>
        <SkillLabel image={"./img/react-native.png"} title={"React Native"}/>
        <SkillLabel image={"./img/jest.png"} title={"Jest"}/>
        <SkillLabel image={"./img/jsdocs.png"} title={"JSDocs"}/>
      </Container>
      </Container>
    );

const content = {en};

export default ({lang}) => <Knowledge {...content[lang]}/>
