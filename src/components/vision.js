import React from "react"
import { cn } from "../helpers"
import styles from "./utils.module.css"

const vision = () => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.block)}>
        <div className={styles.centered}>
          <p>
            Believers in freedom, being able to work from anywhere in
            environments based on individual preferences, that ultimately{" "}
            <span className={styles.underlineWithPadding}>
              nurtures creativity
            </span>{" "}
            &{" "}
            <span className={styles.underlineWithPadding}>improve quality</span>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default vision
