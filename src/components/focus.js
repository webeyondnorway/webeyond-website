import React from "react"
import { cn } from "../helpers"
import styles from "./utils.module.css"

const focus = () => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.block, styles.underlinedBlock)}>
        <div className={styles.centered}>
          <p>
            Focused on efficient development with state-of-the-art technology,
            design and workflow - delivering top quality,{" "}
            <span className={styles.underline}>reducing cost</span> &{" "}
            <span className={styles.underline}>time to market</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default focus
