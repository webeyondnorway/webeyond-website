import React from "react"
import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    height: "100vh",
  },
  text: {},
  span1: {
    borderBottom: "4px solid #FF9B50",
  },
  span2: {
    borderBottom: "5px solid #F6BE4F",
  },
  content: {
    maxWidth: "75%",
  },
}))

const FocusText = ({}) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <div className={styles.content}>
          <Typography variant="h3" className={styles.text}>
            Focused on efficient development with modern technology, design and
            workflow. Delivering top quality,{" "}
            <span className={styles.span1}>reducing cost</span> and{" "}
            <span className={styles.span2}>time to market</span>.
          </Typography>
        </div>
      </Container>
    </div>
  )
}

export default FocusText

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
