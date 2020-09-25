import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#2c2c2c',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e00694',
      light: '#fff',
      dark: '#a90066',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Garamond', 'Baskerville', '"Baskerville Old Face"', '"Hoefler Text"', '"Times New Roman"', 'serif'
    ].join(',')
  },
})

theme = responsiveFontSizes(theme)

export default theme