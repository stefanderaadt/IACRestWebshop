import React from "react"
import { connect } from "react-redux"
import {
  Router,
  Route,
} from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar'

import {PrivateRoute} from "../helpers/PrivateRoute"
import {history} from "../helpers/history"
import Home from "./Home"
import Product from "./Product"
import Products from "./Products"
import LoginPage from "./LoginPage"

import { Header } from "./Layouts"

// User actions
import {login, logout, checkLoggedIn} from '../actions/userActions'

// Products actions
import {fetchProducts} from '../actions/productsActions'

// Cart actions
import {addToCart, openCart, closeCart, removeFromCart} from '../actions/cartActions'

// Alert actions
import {
  successAlertAction,
  errorAlertAction,
  hideAlertAction
} from '../actions/alertActions'

class App extends React.Component {
  // User functions
  login = (username, password) => {
    this.props.dispatch(login(username, password))
  }

  logout = () => {
    this.props.dispatch(logout())
  }

  //Products functions
  fetchProducts = () => {
    this.props.dispatch(fetchProducts())
  }

  //Cart functions
  addToCart = (id, amount) => {
    this.props.dispatch(addToCart(id, amount))
  }

  removeFromCart = (index) => {
    this.props.dispatch(removeFromCart(index))
  }

  openCart = () => {
    this.props.dispatch(openCart())
  }

  closeCart = () => {
    this.props.dispatch(closeCart())
  }

  // Alert functions
  successAlert = (message) =>{
    this.props.dispatch(successAlertAction(message))
  }

  errorAlert = (message) =>{
    this.props.dispatch(errorAlertAction(message))
  }

  hideAlert = () =>{
    this.props.dispatch(hideAlertAction())
  }

  // Component loaded event
  constructor(props) {
    super(props)

    props.dispatch(checkLoggedIn())
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header
              user={this.props.state.user}
              cart={this.props.state.cart}
              logout={this.logout}
              openCart={this.openCart}
              closeCart={this.closeCart}
              remove={this.removeFromCart}
            />

            <Route exact path='/' render={(props) => (
              <Home {...props}
                state={this.props.state}/>
            )} />
            <Route path='/login' render={(props) => (
              <LoginPage {...props}
                state={this.props.state}
                login={this.login}/>
            )} />
            <Route path='/products' render={(props) => (
              <Products {...props}
                products={this.props.state.products}
                setSelectedProduct={this.setSelectedProduct}
                fetchProducts={this.fetchProducts}
                addToCart={this.addToCart}/>
            )}/>
            <Route path='/product/:id' render={(props) => (
              <Product {...props}
                state={this.props.state}/>
            )}/>

            <PrivateRoute path='/orders' render={(props) => (
              <Product {...props}
                state={this.props.state}/>
            )}/>
            <PrivateRoute path='/orders/:id' render={(props) => (
              <Product {...props}
                state={this.props.state}/>
            )}/>
          </div>
        </Router>
        <Snackbar
          open={this.props.state.alert.alert}
          message={this.props.state.alert.message}
          autoHideDuration={4000}
          onClose={this.hideAlert}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
