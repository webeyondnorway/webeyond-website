import React from "react"
import { Container, Box, Typography } from "@material-ui/core"
import Logo from "./logo"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import styles from "./footer.module.css"

const footer = () => {
  return (
    <Container className={styles.root}>
      <Box className={styles.row}>
        <Box display="flex" p={1}>
          <Logo />
        </Box>
        <Box display="flex" p={1}>
          <LinkedInIcon />
        </Box>
      </Box>
      <Box className={styles.row}>
        <Typography
          className={styles.pricacy}
          variant="body2"
          classes={{ body2: styles.privacy }}
        >
          Privacy policy - we dont store your data
        </Typography>
      </Box>
    </Container>
  )
}

export default footer
