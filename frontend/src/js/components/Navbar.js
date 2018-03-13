import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
