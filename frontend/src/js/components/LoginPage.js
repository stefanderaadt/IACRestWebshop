import React from "react"
import {TextField, Button} from 'material-ui'

import { Header, Content } from './Layouts'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''}

    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }

  onPasswordChange = (e) => {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div>
        <TextField
          onChange={this.onUsernameChange}/>
        <TextField
          type="password"
          onChange={this.onPasswordChange}/>
        <Button
          label="Login"
          onClick={
            () => this.props.login(this.state.username, this.state.password)
          }>
          Login
        </Button>

        <Button
          label="Logout"
          onClick={this.props.logout}>
          Logout
        </Button>

      </div>
    )
  }
}

export default LoginPage
