import React from "react"

import { Header, Content } from './Layouts'

class Products extends React.Component {
  render() {
    console.log(this.props.products)
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default Products
