import React from "react"
import styles from "./utils.module.css"

const showcase = () => {
  return (
    <div className={styles.largeContainer}>
      <div className={styles.block}>
        <div className={styles.centered}>
          <h2>rakett.app</h2>
          <p>
            Rakett is our latest project. Go check it out, {""}
            <a
              className={styles.link}
              href="http://rakett.app"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default showcase
