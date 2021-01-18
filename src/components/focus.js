import React from "react"
import { Container, Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const weStyles = makeStyles(() => ({
  root: {
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  underline: {
    borderBottom: "3px solid",
    // fontFamily: "Sofia",
  },
}))

const focus = () => {
  const styles = weStyles()
  return (
    <Container maxWidth="md" className={styles.root}>
      <Box>
        <p>
          Focus on efficient development of high quality solutions with
          state-of-the-art technology, design and workflow - delivering top
          quality and <span className={styles.underline}>reducing cost</span>{" "}
          and <span className={styles.underline}>time to market</span>.
        </p>
      </Box>
    </Container>
  )
}

export default focus
