import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles'

import theme from "./BlkBlur/BbTheme"
import './App.css'
import LandingPage from "./BlkBlur/LandingPage"
import NavBar from "./BlkBlur/NavBar"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage/>
      <NavBar/>
    </ThemeProvider>
  )
}

export default App
