import React from "react"
import { cn } from "../helpers"
import MyAnimation from "./myanimation"
import styles from "./utils.module.css"
import waves from "../css/waves.module.css"
const hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBlock}>
        <div className={cn(styles.heroContent)}>
          <MyAnimation />
          <div className={styles.heroOverlay}></div>
          {/* <div className={waves.wave}></div> */}
          {/* <div className={cn(waves.wave, waves.waveLeft)}></div> */}
          {/* <div className={cn(waves.wave, waves.waveRight)}></div> */}
        </div>
      </div>
    </div>
  )
}

export default hero
