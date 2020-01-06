import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { useSpring, animated, config } from 'react-spring'

function Quote() {
  const [on, toggle] = useState(false);
  const animation = useSpring({ 
    opacity: on ? 1 : 0,
    transform: on ? 'translate3d(0,0,0)' : 'translate3d(50%,0,0)',
    config: config.molasses
  });

  return (
    <div className="right l">
        <Waypoint
          bottomOffset="25%"
          onEnter={() => {
            if(!on) toggle(true);
          }}
        />
        <div className="line2"></div>
        <animated.h1 style={animation}>WORDS I LIVE<br/>BY</animated.h1>
        <animated.p style={animation}>At a young age I was coached to go after my passion and purpose. Chase a career path in the work that I love doing, so my daily duties are not considered a “job”, but would be considered a career. I love development, there’s no greater feeling than finding a solution to a complication with your code. There will be obstacles in which at some point you have to reevaluate your approach for a greater resolution. Just like the feeling when everything you've built integrates and your project is ready to deploy for the world to see, it’s genuinely rewarding. I don't see software engineering as a job, but it's a revolutionary ardor, something I’m committed to pursuing.</animated.p>
    </div>
  )
}

export default Quote
