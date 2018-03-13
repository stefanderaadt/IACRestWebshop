import React from "react"
import { connect } from "react-redux"
import { BrowserRouter, Route } from 'react-router-dom'

import Home from "./Home"
import Product from "./Product"
import Products from "./Products"
import LoginPage from "./LoginPage"

// User actions
import {login} from '../actions/userActions'

// Products userActions
import {fetchProducts, setSelectedProduct} from '../actions/productsActions'

class App extends React.Component {
  login = (username, password) => {
    this.props.dispatch(login(username, password))
  }

  setSelectedProduct = (id) => {
    this.props.dispatch(setSelectedProduct(id))
  }

  // Component loaded event
  componentDidMount() {
    this.props.dispatch(fetchProducts())
  }

  render() {
    return (
      <BrowserRouter>
        <div>
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
              state={this.props.state}
              setSelectedProduct={this.setSelectedProduct}/>
          )} />
          <Route path='/product/:id' render={(props) => (
            <Product {...props}
              state={this.props.state}/>
          )}/>
        </div>
      </BrowserRouter>
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
