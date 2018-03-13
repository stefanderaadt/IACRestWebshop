import React from "react"

import { Header, Content } from './Layouts'

class Products extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default Products
