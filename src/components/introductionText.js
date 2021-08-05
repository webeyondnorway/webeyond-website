import React from "react"
import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    height: "100vh",
  },
  text: {
    marginBottom: theme.spacing(20),
    maxWidth: "75%",
  },
  accent1: {
    color: "#D86BFF",
  },
  accent2: {
    color: "#FF2AFC",
  },
}))

const IntroductionText = ({}) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <Typography variant="h3" className={styles.text}>
          We are coders, designers, filmmakers and photographers, and we make{" "}
          <span className={styles.accent1}>really nice</span>{" "}
          <span className={styles.accent2}>web solutions</span>.
        </Typography>
      </Container>
    </div>
  )
}

export default IntroductionText
