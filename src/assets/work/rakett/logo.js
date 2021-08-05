import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import React from "react"

const rocketStyles = makeStyles(theme => ({
  root: {},
  svg: {
    width: "100%",
    height: "auto",
  },
  path: {
    fill: "#18A0FB",
  },
}))

const Logo = props => {
  const { type } = props
  return (
    <svg
      className={styles.svg}
      width="65"
      height="46"
      viewBox="0 0 65 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.path}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.0982 6.35307C7.0982 2.84437 9.90993 0 13.3784 0H64.5V24.4688C64.5 31.4265 62.4496 36.8088 58.2467 40.4821C54.104 44.164 49.1102 46 43.3068 46C38.59 46 34.2811 44.4687 30.4005 41.4297C26.8901 38.6932 24.6243 35.2939 23.6367 31.2451L0 40.4821L22.8409 15.8834V12.7061H13.3784C9.90992 12.7061 7.0982 9.86177 7.0982 6.35307ZM34.4975 12.7061V22.1695C34.4975 25.4155 35.3414 27.7357 36.909 29.2669C38.5162 30.8366 40.539 31.6329 43.034 31.6329C45.5367 31.6329 47.5985 30.8618 49.2689 29.341L49.2784 29.3323L49.2883 29.324C50.9724 27.8951 51.8433 25.8822 51.8433 23.1812V12.7061H34.4975Z"
      />
    </svg>
  )
}

export default Logo
