import React from "react"
import styles from "./utils.module.css"

const showcase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div>
          <h2 style={{ color: "#eee" }}>rakett.io</h2>

          <p>
            Rakett is our latest project. Go check it out, {""}
            <a className={styles.link} href="http://rakett.io">
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default showcase
