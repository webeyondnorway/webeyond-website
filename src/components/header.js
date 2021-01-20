import React from "react"
import styles from "./utils.module.css"

const Header = ({ siteTitle }) => {
  return (
    <div className={styles.header}>
      <div className={styles.box}>
        {/* <Logo /> */}
        <p>
          Hi, we are <span className={styles.logoFont}>Webeyond</span>
        </p>
      </div>
    </div>
  )
}

export default Header
