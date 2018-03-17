import React from "react"

import { Header, Content } from './Layouts'

class Products extends React.Component {
  render() {
    console.log(this.props.state)
    return (
      <div>
        <Header />
        products
      </div>
    )
  }
}

export default Products
