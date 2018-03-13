import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from "react-router-dom";

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;

  return(
    <AppBar position="static" style={{ backgroundColor: "#2196F3" }}>
      <Toolbar>
        <IconButton className={ classes.menuButton } color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={ classes.flex }>
          Title
        </Typography>
        <Link to="/"><Button color="inherit">Home</Button></Link>
        <Link to="/products"><Button color="inherit">Products</Button></Link>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
};

export default withStyles(styles)(Header)
