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

// Products userActions
import {fetchProducts, setSelectedProduct, addToCart} from '../actions/productsActions'

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

  setSelectedProduct = (id) => {
    this.props.dispatch(setSelectedProduct(id))
  }

  //Products functions
  fetchProducts = () => {
    this.props.dispatch(fetchProducts())
  }

  addToCart = (id) => {
    this.props.dispatch(addToCart(id))
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
              logout={this.logout}
            />

            <Route exact path='/' render={(props) => (
              <Home {...props}
                state={this.props.state}/>
            )} />
            <Route path='/login' render={(props) => (
              <LoginPage {...props}
                state={this.props.state}
                login={this.login}
<<<<<<< HEAD
                logout={this.logout}
                successAlert={this.successAlert}
                errorAlert={this.errorAlert}/>
=======
                logout={this.logout}/>
>>>>>>> 21cf680809e83bfa800d94307f12c5a4f413b74e
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
          bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
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
