import React from "react"
import bigLogo from "../assets/webeyond.svg"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: theme.spacing(8, 0),
  },
  img: {
    maxWidth: "100%",
    width: "100%",
  },
}))

const Header = ({ siteTitle }) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <img className={styles.img} src={bigLogo} alt="" />
      </Container>
    </div>
  )
}

export default Header
