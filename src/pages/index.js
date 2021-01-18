import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Technology from "../components/technology"
import Focus from "../components/focus"
import Freedom from "../components/freedom"
import Project from "../components/project"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Technology />
    <Focus />
    <Freedom />
    <Project />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
