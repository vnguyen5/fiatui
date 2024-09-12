import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import React from "react"
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

interface FiatAppBarProps {
    toggleDrawer: () => () => void
}
const FiatAppBar = (props: FiatAppBarProps) => {

    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={props.toggleDrawer()}
          >
            <AutoGraphIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Beta CDF
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default FiatAppBar