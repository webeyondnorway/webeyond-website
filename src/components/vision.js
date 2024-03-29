import React from "react"
import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { GiPalmTree } from "react-icons/gi"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
  },
  circle: {
    width: 1200,
    height: 1200,
    position: "absolute",
    top: "20%",
    right: 0,
    background: "#0C0A20",
    borderRadius: "50%",
    zIndex: "-1",
  },
  palmtree: {
    fontSize: 400,
  },
  text: {
    fontWeight: 300,
  },
  span1: {
    fontWeight: 700,
    opacity: "1",
  },
  span2: {
    fontWeight: 700,
    opacity: "1",
  },
  opacity: {
    opacity: "0.5",
  },
}))

const VisionText = ({}) => {
  const styles = useStyles()
  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <div className={styles.content}>
          <Typography variant="h4" className={styles.text}>
            <span className={styles.opacity}>
              Believers in freedom, being able to work from anywhere in
              environments based on individual preferences, that ultimately{" "}
            </span>
            <span className={styles.span1}>nurtures creativity</span>{" "}
            <span className={styles.opacity}>and</span>{" "}
            <span className={styles.span2}>improve quality</span>.
          </Typography>
        </div>
      </div>
    </Container>
  )
}

export default VisionText
