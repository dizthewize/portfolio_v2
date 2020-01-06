import React, { useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  imagePath: PropTypes.string,
  mobile: PropTypes.bool
}

function Project({ 
  url = "#",
  name = "hello",
  imagePath = 'nais.png',
  mobile
}) {
  const [hover, changeHover] = useState(false);

  return (
      <article 
      className="project-card"
      onMouseEnter={() => changeHover(!hover)}
      onMouseLeave={() => changeHover(!hover)}
      >
        <img src={`../../${imagePath}`} alt={`project-${name}`}/>
        {hover && (
          <>
          <div className="overlay"></div>
          <div className="description">
            <h2 className="project-name">{name}</h2>
            <a
              href={url} 
              target='_blank' 
              className='project-link'
              rel="noopener noreferrer"
            >Visit Site</a>
            {mobile && <a 
              href="https://apps.apple.com/us/app/endpoint/id1388458874?mt=8"
              target='_blank' 
              rel="noopener noreferrer"
              className='project-link'
            >Download Mobile App</a>}
          </div>
          </>
        )}
      </article>
  )
}

Project.propTypes = propTypes

export default Project
