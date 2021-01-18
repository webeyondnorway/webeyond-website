import React from "react"
import { Container, Box, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const weStyles = makeStyles(() => ({
  root: {
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flex: 100,
  },
  underline: {
    borderBottom: "2px solid",
  },
}))

const project = () => {
  const styles = weStyles()
  return (
    <Container maxWidth="md" className={styles.root}>
      <Box className={styles.box}>
        <h2 style={{ color: "#eee" }}>rakett.io</h2>

        <p>
          Rakett is our latest projects.{" "}
          <span>
            <Link
              underline="none"
              color="inherit"
              className={styles.underline}
              href="http://rakett.io"
            >
              Check it out here
            </Link>
          </span>
        </p>
      </Box>
    </Container>
  )
}

export default project
