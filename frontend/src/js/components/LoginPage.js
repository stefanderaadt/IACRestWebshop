import React from "react"
import {TextField, Button} from 'material-ui'

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
          label="Username"
          onChange={this.onUsernameChange}/>
        <TextField
          type="password"
          label="Password"
          onChange={this.onPasswordChange}/>
        <Button
          label="Primary"
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

        <Button
          label="Primary"
          onClick={
            () => this.props.displaySuccessAlert("Test success")
          }>
          Success
        </Button>

        <Button
          label="Primary"
          primary={true}
          onClick={
            () => this.props.displayErrorAlert("Test error")
          }>
          Error
        </Button>

      </div>
    )
  }
}

export default LoginPage
