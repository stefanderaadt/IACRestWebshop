import React from "react"

import { Header } from './Layouts'

class Products extends React.Component {
  componentDidMount(){
    this.props.fetchProducts()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        products

        {this.props.products.map(function(item, i){
          return {item.name}
        })}

      </div>
    )
  }
}

export default Products
