import React from "react"
import { Container, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const weStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}))

const technology = () => {
  const styles = weStyles()
  return (
    <Container maxWidth="md" className={styles.root}>
      <Box>
        <p>
          Highly skilled in preferred technologies. Firebase, Flutter, React,
          Material UI, Gatsby and Sanity.
        </p>
      </Box>
    </Container>
  )
}

export default technology
