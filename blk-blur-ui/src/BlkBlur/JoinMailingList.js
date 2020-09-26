import React from "react"
import TextField from "@material-ui/core/TextField"
import {Container, Typography} from "@material-ui/core"
import Button from "@material-ui/core/Button"

const JoinMailingList = () => {
  return (
    <Container component="main" maxWidth="xs">
    <div id="mc_embed_signup">
      <form
        action="https://art.us2.list-manage.com/subscribe/post?u=93010d4eedd2d820f0ce001bc&amp;id=02c0f80f81"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <Typography variant="h3" color="secondary">
          Join our mailing list
        </Typography>
        <TextField
          required
          id="mce-EMAIL"
          name="EMAIL"
          label="Email Address"
          variant="outlined"
        />
        <TextField
          id="mce-FNAME"
          name="FNAME"
          label="First Name"
          variant="outlined"
        />
        <TextField
          id="mce-LNAME"
          name="LNAME"
          label="Last Name"
          variant="outlined"
        />
        <Button type="submit" color="secondary" variant="contained">Subscribe</Button>
        <div id="mce-responses" class="clear">
          <div
            class="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            class="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_93010d4eedd2d820f0ce001bc_02c0f80f81"
            tabindex="-1"
            value=""
          />
        </div>
      </form>
    </div>
    </Container>
  )
}

export default JoinMailingList