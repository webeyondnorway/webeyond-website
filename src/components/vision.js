import React from "react"
import styles from "./utils.module.css"
import { AiOutlineLine } from "react-icons/ai"

const vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.centered}>
          <p>
            Strong believers in freedom, being able to work from anywhere in
            environments based on individual preferences - that ultimately{" "}
            <span className={styles.underlineWithPadding}>
              nurtures creativity
            </span>
            ,{" "}
            <span className={styles.underlineWithPadding}>improve quality</span>{" "}
            &{" "}
            <span className={styles.underlineWithPadding}>
              boost productivity
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default vision
