import React from "react"
import { cn } from "../helpers"
import styles from "../css/anim.module.css"
const anim = () => {
  return (
    <div className={styles.root}>
      <div className={cn(styles.arrow, styles.arrowTop)}>
        <svg width="270.11" height="649.9" overflow="visible">
          <g className={cn(styles.itemTo, styles.bounce1)}>
            <path
              className={cn(styles.geoArrow, styles.drawIn)}
              d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
            />
          </g>
          <circle
            className={cn(styles.geoArrow, styles.itemTo, styles.bounce2)}
            cx="194.65"
            cy="69.54"
            r="7.96"
          />
          <circle
            className={cn(styles.geoArrow, styles.drawIn)}
            cx="194.65"
            cy="39.5"
            r="7.96"
          />
          <circle
            className={cn(styles.geoArrow, styles.itemTo, styles.bounce3)}
            cx="194.65"
            cy="9.46"
            r="7.96"
          />
          <g className={cn(styles.geoArrow, styles.itemTo, styles.bounce2)}>
            <path
              className={cn(styles.st0, styles.drawIn)}
              d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552"
            />
          </g>
        </svg>
      </div>
      <div className={cn(styles.arrow, styles.arrowBottom)}>
        <svg width="31.35" height="649.9" overflow="visible">
          <g className={cn(styles.itemTo, styles.bounce1)}>
            <circle
              className={cn(styles.geoArrow, styles.itemTo, styles.bounce3)}
              cx="15.5"
              cy="580.36"
              r="7.96"
            />
            <circle
              className={cn(styles.geoArrow, styles.drawIn)}
              cx="15.5"
              cy="610.4"
              r="7.96"
            />
            <circle
              className={cn(styles.geoArrow, styles.itemTo, styles.bounce2)}
              cx="15.5"
              cy="640.44"
              r="7.96"
            />
            <g className={cn(styles.itemTo, styles.bounce2)}>
              <path
                className={cn(styles.geoArrow, styles.drawIn)}
                d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={cn(styles.main)}>
        <div className={cn(styles.mainTextWrapper)}>
          <div className={cn(styles.mainTitle)}></div>

          <svg
            className={cn(styles.dottedCircle)}
            width="352"
            height="352"
            overflow="visible"
          >
            <circle
              cx="176"
              cy="176"
              r="174"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-dasharray="12.921,11.9271"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default anim
