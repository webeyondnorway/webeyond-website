import { AppBar, Box, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Logo from "./logo"

const weStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: "center",
    minHeight: 175,
  },
}))

const Header = ({ siteTitle }) => {
  const styles = weStyles()
  return (
    <AppBar color="transparent" position="absolute" elevation={0}>
      <Toolbar className={styles.toolbar}>
        <Box className={styles.box}>
          <Logo />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
