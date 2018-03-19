import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
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

class Header extends React.Component {

  render() {
    return(
      <AppBar position="static" style={{ backgroundColor: "#2196F3" }}>
        <Toolbar>
          <IconButton style={ styles.menuButton } color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" style={ styles.flex }>
            WebShop
          </Typography>

          {this.props.user.loggedIn ? (
            <Fragment>
              <Button component={ Link } to="/" color="inherit">Home</Button>
              <Button component={ Link } to="/products" color="inherit">Products</Button>
              <Button component={ Link } to="/login" onClick={this.props.logout} color="inherit">Logout</Button>
            </Fragment>
          ) : (
            <Button component={ Link } to="/login" color="inherit">Login</Button>
          )}

        </Toolbar>
      </AppBar>
    )
  }

};

export default Header
