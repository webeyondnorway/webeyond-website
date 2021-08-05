import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

let myTheme = createMuiTheme({
  palette: {
    text: {
      secondary: "#E4EEFF",
    },
    primary: {
      main: "#FF9B50",
    },
  },
  // typography: {
  //   h1: {
  //     fontWeight: "400",
  //     fontSize: 64,
  //   },
  //   h2: {
  //     fontWeight: "400",
  //     fontSize: 64,
  //   },
  //   h3: {
  //     fontWeight: "400",
  //   },
  //   h4: {
  //     fontWeight: "400",
  //   },
  //   h5: {
  //     fontWeight: "400",
  //   },
  //   h6: {
  //     fontWeight: "400",
  //   },
  //   subtitle1: {
  //     fontSize: 20,
  //   },
  // },
})
const theme = responsiveFontSizes(myTheme)

export default theme
