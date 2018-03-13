import React from "react"

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>login</h1>

        <label>
          Name:
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </label>

        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>

        <div className="waves-effect waves-light btn"
          onClick={() => this.props.login(this.state.username, this.state.password)}>
          login
        </div>
      </div>
    )
  }
}

export default LoginPage
