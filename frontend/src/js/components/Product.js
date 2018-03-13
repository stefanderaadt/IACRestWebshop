import React from "react"

import Navbar from "./Navbar"

class Product extends React.Component {
  render() {
    console.log(this.props.match.params.id)

    return (
      <div>
        <Navbar />
        <h1>Product</h1>
      </div>
    )
  }
}

export default Product
