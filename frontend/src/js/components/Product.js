import React from "react"

import { Header, Content } from './Layouts'

class Product extends React.Component {
  render() {
    console.log(this.props.match.params.id)

    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default Product
