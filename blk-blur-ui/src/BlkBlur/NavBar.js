import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import {Typography} from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}));


const NavBar = () => {
	const classes = useStyles()

	return (
		<AppBar position="fixed" color="primary" className={classes.appBar} style={{ backgroundColor: "rgb(0,0,0,0.75)"}}>
        <Toolbar>
	        <Typography variant="h5">capsule//lookback</Typography>
	        <div className={classes.grow} />
	        {/* eslint-disable-next-line*/}
	        <Typography variant="h5">//who we is//</Typography>
        </Toolbar>
      </AppBar>
	)
}

export default NavBar