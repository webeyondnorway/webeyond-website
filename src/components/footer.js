import React from "react"
import { Container, Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Logo from "./logo"
import { FaLinkedinIn } from "react-icons/fa"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const weStyles = makeStyles(() => ({
  container: {
    display: "flex",
    height: 400,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  privacy: {
    fontSize: 13,
    color: "rgba(0,0,0,0.50)",
  },
}))

const footer = () => {
  const styles = weStyles()
  return (
    <Container className={styles.container}>
      <Box className={styles.root}>
        <Box display="flex" p={1}>
          <Logo />
        </Box>
        <Box display="flex" p={1}>
          <LinkedInIcon />
        </Box>
      </Box>
      <Box className={styles.privacy}>
        <Typography variant="body2" classes={{ body2: styles.privacy }}>
          Privacy policy - we dont store your data
        </Typography>
      </Box>
    </Container>
  )
}

export default footer
