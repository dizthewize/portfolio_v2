import React, { useState } from 'react'
import {
  MenuItem,
  Menu,
  MenuButton
} from './hamburgerMenu'
import { Link } from 'gatsby'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClick = () => {
    window.location.href = 'mailto:martez.connerjr@gmail.com';
  }

  return (
    <nav>
      <Link to="/" className="logo"><div className="rec"></div>Martez Conner</Link>
      <div className="nav-right">
        <div className='browser-nav'>
          <a onClick={onClick}>CONTACT ME</a>
          <Link to="/work">
            WORK
          </Link>
        </div>
      </div>
      
      <div className="mobile-nav">
      <MenuButton open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} color='#090C08'/>
      <Menu open={menuOpen}>
        <Link to="/">
          <MenuItem
            delay={`${0.1}s`}
            open={menuOpen}
            onClick={() => setMenuOpen(false)}>
            HOME
          </MenuItem>
        </Link>
        <Link to="/work">
          <MenuItem
            delay={`${0.1}s`}
            open={menuOpen}
            onClick={() => setMenuOpen(false)}>
            WORK
          </MenuItem>
        </Link>
        <a onClick={onClick}>CONTACT ME</a>
      </Menu>
      </div>
    </nav>
  )
}

export default Nav;
