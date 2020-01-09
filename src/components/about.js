import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated as a, config } from 'react-spring'
import Quote from './quote';

function About() {
  const [on, toggle] = useState(false);
  const animation = useSpring({ 
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(50%,0,0)',
    config: config.molasses
  });

  return (
  <div className="wrapper-content">
  <div className="landing">
    <div className="left">
        <div className="line"></div>
        <h1>EXPERIENCED FULL STACK<br/>ENGINEER</h1>
        <p>For close to four years, I have been working in software engineering. I specialize in consumer-facing applications and enjoy focusing my career on building maintainable, scalable systems in which the UI communicates with the data model. I have knowledge in many development technologies, my wide ranged knowledge and skill set is focused on full stack development including highly popular libraries such as react and react native. My knowledge and expertise spans across various libraries and technologies.</p>
        <div className="rec-large"></div>
    </div>
    <div className="right">
        <div className="skills">
          <Waypoint
            onEnter={() => {
              if(!on) toggle(true);
            }}
          />
            <a.div style={animation} className="skill-box">
                <h2>React</h2>
            </a.div>
            <a.div style={animation} className="skill-box">
                <h2>React Native</h2>
            </a.div>
            <a.div style={animation} className="skill-box">
                <h2>Next JS</h2>
            </a.div>
            <a.div style={animation} className="skill-box">
                <h2>Gatsby</h2>
            </a.div>
            <a.div style={animation} className="skill-box">
                <h2>Node JS</h2>
            </a.div>
        </div>
    </div>
    </div>
        <div className="section2">
            <div className="left r">
                <h1>LET'S START A<br/>PROJECT</h1>
                <div className="rec-large-2"></div>
            </div>
            <Quote />
        </div>
    </div>
  )
}

export default About
