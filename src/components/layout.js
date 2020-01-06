/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useSpring, animated } from 'react-spring';

import Footer from "./footer";
import "../styles/styles.scss";

function Layout({ children, page ='home' }) {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade}>
      <div className="detail-lines">
        <div className="left-line-1 lines"></div>
        <div className="left-line-2 lines"></div>
        <div className="left-line-3 lines"></div>
        <div className="center-line lines"></div>
        <div className="right-line-1 lines"></div>
        <div className="right-line-2 lines"></div>
        <div className="right-line-3 lines"></div>
      </div>
      <main>{children}</main>
      <Footer page={page} />
    </animated.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
