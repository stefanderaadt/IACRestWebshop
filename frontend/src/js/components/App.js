import React, { Fragment } from "react"
import { connect } from "react-redux"
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar'

import {PrivateRoute} from "../helpers/PrivateRoute"
import {history} from "../helpers/history"
import Home from "./Home"
import Product from "./Product"
import Products from "./Products"
import LoginPage from "./LoginPage"
import Order from "./Order"
import Vier from "./404"

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

  componentDidMount(){
    this.fetchProducts()
  }

  render() {
    return (
      <div>
        <Router history={history}>
        <Fragment>
          <Header
            user={this.props.state.user}
            cart={this.props.state.cart}
            logout={this.logout}
            openCart={this.openCart}
            closeCart={this.closeCart}
            remove={this.removeFromCart} />

            <Switch>

              <Route exact path='/' render={(props) => (
                <Home {...props}
                  state={this.props.state}
                  products={this.props.state.products}
                  addToCart={this.addToCart}/>
              )} />
              <Route path='/login' render={(props) => (
                <LoginPage {...props}
                  state={this.props.state}
                  login={this.login}/>
              )} />
              <Route path='/products' render={(props) => (
                <Products {...props}
                  products={this.props.state.products}
                  addToCart={this.addToCart}/>
              )}/>
              <Route path='/product/:id' render={(props) => (
                <Product {...props}
                  state={this.props.state}/>
              )}/>
              <Route path='/orders' render={(props) => (
                <Order {...props}
                  state={this.props.state}/>
              )}/>
              <PrivateRoute path='/orders/:id' render={(props) => (
                <Product {...props}
                  state={this.props.state}/>
              )}/>
              <Route path='*' render={(props) => (
                <Vier {...props}/>
              )}/>
            </Switch>
          </Fragment>
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
