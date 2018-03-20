import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import { Link } from "react-router-dom";
import Menu from 'material-ui/Menu';
import ShoppingCart from 'material-ui-icons/ShoppingCart';

import Cart from '../ShoppingCart';

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

  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return(
      <AppBar position="static" style={{ backgroundColor: "#2196F3" }}>
        <Toolbar>
          <Typography variant="title" color="inherit" style={ styles.flex }>
            WebShop
          </Typography>
          <Button component={ Link } to="/" color="inherit">Home</Button>
          <Button component={ Link } to="/products" color="inherit">Products</Button>

          {this.props.user.loggedIn ? (
              <Fragment>
                <Button
                    component={ Link }
                    to="/login"
                    onClick={ this.props.logout }
                    color="inherit">
                    Logout
                </Button>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={ this.handleMenu }
                  color="inherit">
                  <ShoppingCart>
                    shopping_cart
                  </ShoppingCart>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={ open }
                  onClose={ this.handleClose }
                >
                  <Cart cart={ this.props.cart } remove={ this.props.remove }/>
                </Menu>
              </Fragment>
          ) : (
            <Fragment>
              <Button component={ Link } to="/login" color="inherit">Login</Button>
            </Fragment>
          )}

        </Toolbar>
      </AppBar>
    )
  }

};

export default Header
