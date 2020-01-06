import React from "react"

import Layout from "../components/layout"
import Nav from "../components/nav";
import Projects from '../components/projects';
import SEO from "../components/seo"

const Work = () => (
  <Layout page='work'>
    <SEO title="Work" />
    <Nav />
    <Projects />
  </Layout>
)

export default Work
