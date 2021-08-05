import React from "react"
import { Typography, Container, Button, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MailIcon from "@material-ui/icons/Mail"
import { GiPalmTree } from "react-icons/gi"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
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

const HelloText = ({}) => {
  const styles = useStyles()
  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <div className={styles.content}>
          <Typography variant="h1" className={styles.text}>
            Lets talk?
          </Typography>

          <IconButton color="primary">
            <MailIcon fontSize="large" />
          </IconButton>
          <IconButton color="primary">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton color="primary">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </Container>
  )
}

export default HelloText
