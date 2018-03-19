import React, { Fragment } from "react"

const styles = {
  wrapper: {
    padding: '12px',
    width: '300px'
  },
  hr: {
    display: 'block',
    height: '1px',
    border: 0,
    borderTop: '2px solid #E0E0E0',
    margin: '1em 0',
    padding: 0,
  }
}

class ShoppingCart extends React.Component {
  render() {
    return (
      <div style={ styles.wrapper }>

        {this.props.cart.all.length == 0 ? (
          <div style={{textAlign: 'center'}}>
            Shopping Cart empty
          </div>
        ) : (
          <Fragment>
            {this.props.cart.all.map(function(item, i){
              return(
                <div>
                  {item.name}
                </div>
              )
            },this)}
          </Fragment>
        )}

        {this.props.cart.all.length == 0 ? (
          null
        ) : (
          <hr style={styles.hr}/>
        )}

      </div>
    )
  }
}

export default ShoppingCart
