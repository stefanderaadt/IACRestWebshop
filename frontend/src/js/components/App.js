import React from "react"
import { connect } from "react-redux"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar'

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
  displaySuccessAlertAction,
  displayErrorAlertAction,
  endAlertAction
} from '../actions/alertActions'

//Create private route object
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    props.loggedIn === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

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
  displaySuccessAlert = (message) =>{
    this.props.dispatch(displaySuccessAlertAction(message))
  }

  displayErrorAlert = (message) =>{
    this.props.dispatch(displayErrorAlertAction(message))
  }

  endAlert = () =>{
    this.props.dispatch(endAlertAction())
  }

  // Component loaded event
  constructor(props) {
    super(props)

    props.dispatch(fetchProducts())
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' render={(props) => (
              <Home {...props}
                state={this.props.state}/>
            )} />
            <Route path='/login' render={(props) => (
              <LoginPage {...props}
                state={this.props.state}
                login={this.login}
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

            <PrivateRoute path='/orders' loggedIn={this.props.state.user.loggedIn} render={(props) => (
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
          onClose={this.endAlert}
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
