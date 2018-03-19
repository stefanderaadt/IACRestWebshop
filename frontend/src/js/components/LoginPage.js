import React from "react"
import {TextField, Button, Paper} from 'material-ui'

const styles = {
  paper: {
    padding: '12px',
    width: '200px',
    display: 'inline-block'
  },
}

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
<<<<<<< HEAD
      <div>
        <TextField
          label="Username"
          onChange={this.onUsernameChange}/>
        <TextField
          type="password"
          label="Password"
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

        <Button
          label="Primary"
          onClick={
            () => this.props.successAlert("Test success")
          }>
          Success
        </Button>

        <Button
          label="Primary"
          onClick={
            () => this.props.errorAlert("Test error")
          }>
          Error
        </Button>

=======
      <div style={{padding: '12px',  textAlign: 'center'}}>
        <Paper style={styles.paper}>
          <TextField
            label="Username"
            onChange={this.onUsernameChange}/>
          <TextField
            type="password"
            label="Password"
            onChange={this.onPasswordChange}/>
          <Button
            label="Login"
            onClick={
              () => this.props.login(this.state.username, this.state.password)
            }>
            Login
          </Button>
        </Paper>
>>>>>>> 21cf680809e83bfa800d94307f12c5a4f413b74e
      </div>
    )
  }
}

export default LoginPage
