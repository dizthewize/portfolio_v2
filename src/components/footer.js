import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = ({ page }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const { title } = site.siteMetadata;

  return (
    <footer className={cx({ work: page === 'work' })}>
      <div className={cx('social', { work: page === 'work' })}>
          <a href="https://www.linkedin.com/in/martez-conner-b38038108/" target='_blank' rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://github.com/killm0ng3r" target='_blank' rel="noopener noreferrer">GITHUB</a>
      </div>
      <p>2019&copy; { title ? title : 'Martez Howard' }</p>
    </footer>
  )
}

Footer.propTypes = {
  page: PropTypes.string
}

export default Footer;
