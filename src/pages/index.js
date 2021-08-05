import React from "react"
import Focus from "../components/focus"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Showcase from "../components/showcase"
import Technologies from "../components/Technologies"
import Vision from "../components/vision"
import IntroductionText from "../components/IntroductionText"
import Hello from "../components/Hello"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 hidden>Really nice web solutions by Webeyond</h1>
    <IntroductionText />
    <Technologies />
    <Focus />
    <Vision />
    <Showcase />
    <Hello />
  </Layout>
)

export default IndexPage
