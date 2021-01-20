import React from "react"
import styles from "../css/myanimation.module.css"
const myanimation = () => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.svg}
        // width="1105"
        // height="676"
        viewBox="0 0 1105 676"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1105"
          height="676"
        >
          <path
            d="M0.0166016 0.834625H1104.02V675.835H0.0166016V0.834625Z"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            className={styles.center}
            d="M552.017 0.834625L992.017 675.835H112.017L552.017 0.834625Z"
            fill="black"
          />
          <path
            className={styles.left}
            d="M114.864 675.835L554.864 0.834595H-325.136L114.864 675.835Z"
          />
          <path
            className={styles.right}
            d="M991.219 675.835L1431.22 0.834595H551.219L991.219 675.835Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default myanimation
