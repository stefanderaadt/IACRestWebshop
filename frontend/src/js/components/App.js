import React from "react"
import { connect } from "react-redux"
import { BrowserRouter, Route } from 'react-router-dom'

import Home from "./Home"
import Product from "./Product"
import Products from "./Products"
import LoginPage from "./LoginPage"

// User actions
import {login} from '../actions/userActions'

class App extends React.Component {
  login = (username, password) => {
    this.props.dispatch(login(username, password))
  }

  render() {
    console.log(this.props.state)

    if (this.props.state.isLoggedIn) {
      return (
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/product/:id' component={Product}/>
          </div>
        </BrowserRouter>
      )
    }

    return <LoginPage login={this.login} />
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  state: state
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
