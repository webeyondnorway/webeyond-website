import React from "react"
import Focus from "../components/focus"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Showcase from "../components/showcase"
import Punchline from "../components/punchline"
import Vision from "../components/vision"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Punchline />
    <Focus />
    <Vision />
    <Showcase />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
