import React, { Component } from 'react';

import { Header, Divider, Container, Icon } from 'semantic-ui-react'

export default class MyStory extends Component {

  render() {
    return (
        <Container>
          <Divider horizontal><Header size='medium'><Icon name='book'/>My Story</Header></Divider>
          <Container text>
            {content}
          </Container>
      </Container>
    );
  }
}

const content = <div>
  <h3>How I became a web development</h3><h4>The beginning</h4>
<p>I think I first entered the world of coding when I was about 13 years old.
At that time, the current fad at school was to play those online flash games found in websites like Miniclip, and Armorgames. As I played these games, I remember I would often think of features I would love they added to the games. And that’s what got me into Macromedia Flash (now Adobe Flash), I wanted to create my own games, with all the features I liked, so I “learned” my very first programming language: Actionscript 2.</p>
<p>I plunged into coding with absolutely no basic understanding of programming, I would just copy and paste snippets of code from tutorial websites and blindly tweak the values of variables hundreds of times with hopes of getting some shapes on the screen to move. After weeks of tinkering with various scripts, indeed, the end result was always a complete mess of code. Yet, I must say, despite my complete lack of formal programming skills (I didn’t discover the ‘for’ loop until a couple of years later since I started coding), I somehow managed to create some quite impressive prototypes of games.
</p>
<h4>Moving on</h4>
<p>
Those first years of developing silly glitchy games where very fun and rewarding, I really came to love that feeling of achievement after having successfully crafted a piece of functioning software, it was after all what kept me going with this trade for many more years; it became my favourite hobby.</p>
<p>
At some point I began to feel the urge to move on to developing something other than Flash games, I now wanted to create something useful, so I thought about building a todo app, and this time on something outside of Flash.</p>
<p>
This started a period of deep frustration for me, my ignorance on programming began to surface and it soon became very evident that I didn’t know how to program correctly. For a period of over a year, I tried lots of different programming languages and frameworks, visual basic, java, python, c#. Each language took a long time to get started with, and gave me a real hard time when trying to figure out how to accomplish even the simplest things.</p>
<p>
The strategy of picking and tweaking snippets from random websites wasn’t working anymore, so I began to search for more in depth explanatory tutorials, where I could actually learn programming. Eventually, I got the gist of Object Oriented Programming and it all began to slowly make sense, I finally started to comprehend the structure of code and logic behind it.</p>
<h4>Web Development</h4>
<p>
At some point during these years of exploration, I came across with javascript. And so it officially marked the beginning of my journey into web development.</p>
<p>
But it was of course nothing dramatic, I think at first I liked Javascript mainly because of that characteristic of it working on HTML pages where I could just refresh the document after every change, something I missed from Flash: not having to wait for long compilations and lengthy builds, just an instant preview of your program after a single keystroke.
</p>
<p>
Another very important characteristic I soon found from the world of HTML, CSS and Javascript, was the fantastic plethora of resources and tutorials online readily available for all levels of programmers. Every question that arose while I learned, I could always solve right away from a google search.
</p>
<p>
After I learned the static part of the DHTML universe (HTML/JavaScript/CSS), I wanted to try some technology from the dynamic side. PHP seemed promising. So I downloaded my very first book on programming, one for building practical apps on PHP.  I was a real geek now.
</p>
<p>
I created some rather unimpressive small mock-up apps which worked just fine, nonetheless it was really exciting, I felt this time I was actually doing some serious development, mainly because I deployed for the first time, a real, working, internet accessible, web site.
</p>
<p>
In the meantime I also learned about databases, namely mySQL, I learned how to make and use ‘Ajax’ calls, and delved deeper into understanding the server-client interaction.
</p>
<p>
Also at about this time, I started college. The decision of what to study was easy for me, years before, I had already put my eye on Informatics Engineering, and so I began this career with big expectations for the future ahead.
</p>
</div>
