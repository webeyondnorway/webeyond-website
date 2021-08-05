/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { MuiThemeProvider } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import PropTypes from "prop-types"
import React from "react"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import theme from "./theme"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Header siteTitle="Webeyond" />
        <main>{children}</main>
        <Footer />
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
