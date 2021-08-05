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
  content: {
    display: "flex",
    // justifyContent: "flex-end",
    // textAlign: "right",
  },
  text: {
    maxWidth: "100%",
  },
  accent1: {
    color: "#FF9B50",
    fontSize: "140%",
  },
  accent2: {
    color: "#D86BFF",
    fontSize: "130%",
  },
  accent3: {
    color: "#42C6FF",
    fontSize: "120%",
  },
  accent4: {
    color: "#F6BE4F",
    fontSize: "110%",
  },
  accent5: {
    color: "#FF2AFC",
  },
  accent6: {
    color: "#7984D1",
  },
}))

const Technologies = () => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.content}>
          <Typography variant="h3" className={styles.text}>
            Highly skilled in preferred technologies.{" "}
            <span className={styles.accent1}>React</span>,{" "}
            <span className={styles.accent2}>Firebase</span>,{" "}
            <span className={styles.accent3}>Material UI</span>,{" "}
            <span className={styles.accent4}>Gatsby</span>,{" "}
            <span className={styles.accent5}>Netlify</span>,{" "}
            <span className={styles.accent6}>Figma</span> ++
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default Technologies
