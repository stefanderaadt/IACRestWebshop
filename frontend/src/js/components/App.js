import React from "react"
import { connect } from "react-redux"
import {
  Router,
  Route,
  Redirect,
} from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar'

import {PrivateRoute} from "../helpers/PrivateRoute"
import {history} from "../helpers/history"
import Home from "./Home"
import Product from "./Product"
import Products from "./Products"
import LoginPage from "./LoginPage"

// User actions
import {login, logout, checkLoggedIn} from '../actions/userActions'

// Products userActions
import {fetchProducts, setSelectedProduct} from '../actions/productsActions'

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

    props.dispatch(fetchProducts())
    props.dispatch(checkLoggedIn())
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Route exact path='/' render={(props) => (
              <Home {...props}
                state={this.props.state}/>
            )} />
            <Route path='/login' render={(props) => (
              <LoginPage {...props}
                state={this.props.state}
                login={this.login}
                logout={this.logout}
                displaySuccessAlert={this.displaySuccessAlert}
                displayErrorAlert={this.displayErrorAlert}/>
            )} />
            <Route path='/products' render={(props) => (
              <Products {...props}
                state={this.props.state}
                setSelectedProduct={this.setSelectedProduct}/>
            )} />
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
