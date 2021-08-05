import React from "react"
import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(5, 0),
  },
  content: {
    minHeight: 500,
    display: "flex",

    alignItems: "center",
  },
  privacy: {
    display: "flex",
    justifyContent: "flex-end",
    opacity: "0.6",
  },
  accent: {
    color: "#D86BFF",
  },
}))

const Footer = ({}) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <div className={styles.content}>
          <Typography variant="h1" className={styles.text}>
            Solutions you will <span className={styles.accent}>love</span>.
          </Typography>
        </div>
        <div className={styles.privacy}>
          <Typography variant="body2">We dont store your data</Typography>
        </div>
      </Container>
    </div>
  )
}

export default Footer

// import React from "react"
// import { cn } from "../helpers"
// import styles from "./utils.module.css"

// const focus = () => {
//   return (
//     <div className={styles.container}>
//       <div className={cn(styles.block, styles.underlinedBlock)}>
//         <div className={styles.centered}>
//           <p>
//             Focused on efficient development with state-of-the-art technology,
//             design and workflow - delivering top quality,{" "}
//             <span className={styles.underline}>reducing cost</span> &{" "}
//             <span className={styles.underline}>time to market</span>.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default focus

// import LinkedInIcon from "@material-ui/icons/LinkedIn"
// import React from "react"
// import Logo from "./logo"
// import styles from "./utils.module.css"
// import { cn } from "../helpers"

// const footer = () => {
//   return (
//     <div className={styles.footerContainer}>
//       <div className={styles.footerBlock}>
//         <div className={styles.flexRow}>
//           <div className={cn(styles.flexItem, styles.defaultPadding)}>
//             <Logo />
//           </div>
//           <div className={(styles.flexItem, styles.defaultPadding)}>
//             <LinkedInIcon />
//           </div>
//         </div>
//         <div className={styles.flexRow}>
//           <span className={styles.footerSlogan}>Solutions you will love.</span>
//         </div>
//         <div className={cn(styles.flexRow, styles.privacyPolicyRow)}>
//           <div className={styles.centered}>
//             <p className={styles.privacyPolicyText}>
//               Oh, by the way.. we don`t store your data.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default footer
