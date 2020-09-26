import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import bumper from "../blk-blur-bumper2.mp4"
import { Link, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  bgVideo: {
    position: "fixed",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    zIndex: -100,
    msTransform: "translateX(-50%) translateY(-50%)",
    mozTransform: "translateX(-50%) translateY(-50%)",
    webkitTransform: "translateX(-50%) translateY(-50%)",
    transform: "translateX(-50%) translateY(-50%)",
    background:
      "https://dtsvkkjw40x57.cloudfront.net/images/videos/666016/8066_2Fplayer_image_2F666016_2FUeWFSuApQSSpbfGO3vNM_Residencies-mourning1.jpg",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  floatingBox: {
    backgroundColor: "rgb(0, 0, 0, 0.75)",
    padding: theme.spacing(4),
    width: "50%",
    margin: "2rem",
    float: "right",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      margin: 5,
      padding: 10,
    },
  },
  floatingSiteTitle: {
    backgroundColor: "rgb(255,255,255, 0)",
    float: "left",
    color: "white",
    margin: 5,
    padding: 10,
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload
        poster="https://dtsvkkjw40x57.cloudfront.net/images/videos/666016/8066_2Fplayer_image_2F666016_2FUeWFSuApQSSpbfGO3vNM_Residencies-mourning1.jpg"
        id="bgvid"
        src={bumper}
        className={classes.bgVideo}
      ></video>
      <Typography variant="h2" className={classes.floatingSiteTitle}>
        blk//blur
      </Typography>
      <Grid
        container
        direction="column"
        className={classes.floatingBox}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1" color="secondary">
            Mourning
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1" color="secondary">
            [A]
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1" color="secondary">
            BLKstar
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color="secondary" style={{ color: "white" }}>
            Residencies
          </Typography>
        </Grid>
        <Grid item>
          <Link
            href="https://www.ortvi.art/programs/blkblur-bumper"
            underline="none"
            target="_blank"
          >
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              style={{ marginTop: 20 }}
            >
              View
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default LandingPage
