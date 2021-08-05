import React from "react"
import { Typography, Container, Fab } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "rgba(72,79,125,1)",
    height: 600,
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    // borderRadius: "56px",
    padding: theme.spacing(10),
  },
  content: {},
  headline: {
    opacity: "0.4",
  },
}))

const Showcase = () => {
  const styles = useStyles()
  return (
    <Container maxWidth="lg">
      <div className={styles.root}>
        <Typography variant="h4" gutterBottom className={styles.headline}>
          Recent work
        </Typography>
        <Typography variant="h4" gutterBottom>
          Rakett is our latest project. Smart information management for traders
          and investors.
        </Typography>
        <Typography variant="subtitle1">
          Go check it out at rakett.app
        </Typography>
      </div>
    </Container>
  )
}

export default Showcase

// import { Typography } from "@material-ui/core"
// import React from "react"
// import styles from "./utils.module.css"

// const showcase = () => {
//   return (
//     <div className={styles.largeContainer}>
//       <div className={styles.block}>
//         <div className={styles.centered}>
//           <Typography variant="h4">Rakett</Typography>
//           <p>
//             Check out our latest project at rakett.app
//             {/* <a
//               className={styles.link}
//               href="http://rakett.app"
//               target="_blank"
//               rel="noreferrer"
//             >
//               here
//             </a> */}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default showcase
