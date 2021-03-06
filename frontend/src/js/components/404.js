import React from "react"

class Vier extends React.Component {
  render() {

    console.log(this.props);

    return (
      <div style={styles.errorPage}>
        <h1 style={{fontSize: '60px', margin:0}}>404</h1>

        <p>Sorry <b>{this.props.location.pathname}</b> does not exist.</p>
      </div>
    )
  }
}

const styles = {
  errorPage: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: '250px',
    height: '100px',
    textAlign: 'center',
    color: '#9E9E9E'
  }
}

export default Vier
