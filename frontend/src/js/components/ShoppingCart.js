import React from "react"

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        {this.props.cart.all.map(function(item, i){
          return(
            <div>
              {item.name}
            </div>
          )
        },this)}
      </div>
    )
  }
}

export default ShoppingCart
