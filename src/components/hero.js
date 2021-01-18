import React from "react"
import { Container, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const weStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  visualContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
}))

const hero = () => {
  const styles = weStyles()
  return (
    <Container className={styles.root} maxWidth="lg">
      <Box className={styles.box}>
        {/* <h1>A technology & design company</h1> */}
        <div className={styles.visualContainer}>hm</div>
      </Box>
    </Container>
  )
}

export default hero
