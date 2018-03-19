import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from "react-router-dom";
import Icon from 'material-ui/Icon';
import Menu, { MenuItem } from 'material-ui/Menu';
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
          <Button component={ Link } to="/" color="inherit">Home</Button>
          <Button component={ Link } to="/products" color="inherit">Products</Button>

          {this.props.user.loggedIn ? (
              <Fragment>
                <Button
                    component={ Link }
                    to="/login"
                    onClick={this.props.logout}
                    color="inherit">
                    Logout
                </Button>
                <IconButton
                  aria-owns={this.props.cart.open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.props.openCart}
                  color="inherit">
                  <ShoppingCart>
                    shopping_cart
                  </ShoppingCart>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={this.props.cart.open}
                  onClose={this.props.closeCart}>
                  <Cart cart={this.props.cart}/>
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
