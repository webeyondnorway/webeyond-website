import LinkedInIcon from "@material-ui/icons/LinkedIn"
import React from "react"
import Logo from "./logo"
import styles from "./utils.module.css"
import { cn } from "../helpers/"

const footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerBlock}>
        <div className={styles.flexRow}>
          <div className={cn(styles.flexItem, styles.defaultPadding)}>
            <Logo />
          </div>
          <div className={styles.defaultPadding}>
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className={styles.flexRow}>
        <span className={styles.pricacy}>
          Privacy policy - we dont store your data
        </span>
      </div>
    </div>
  )
}

export default footer
