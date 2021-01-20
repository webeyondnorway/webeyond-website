import React from "react"
import { cn } from "../helpers"
import MyAnimation from "./myanimation"
import styles from "./utils.module.css"
const hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBlock}>
        <div className={cn(styles.heroContent)}>
          <MyAnimation />
          <div className={styles.heroOverlay}></div>
        </div>
      </div>
    </div>
  )
}

export default hero
