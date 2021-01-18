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
  },
}))

const freedom = () => {
  const styles = weStyles()
  return (
    <Container maxWidth="md" className={styles.root}>
      <Box>
        <p>
          A strong believer in freedom - being able to work from anywhere in a
          workplace and environment based on individual preferences - that
          ultimately{" "}
          <span className={styles.underline}>nurtures creativity</span>,{" "}
          <span className={styles.underline}>improve quality</span> and{" "}
          <span className={styles.underline}>boost productivity</span>.
        </p>
      </Box>
    </Container>
  )
}

export default freedom
