import React, { Fragment } from "react"
import { IconButton, Button } from 'material-ui';
import Close from 'material-ui-icons/Close';

const styles = {
  wrapper: {
    padding: '12px',
    width: '400px'
  },
  hr: {
    display: 'block',
    height: '1px',
    border: 0,
    borderTop: '2px solid #E0E0E0',
    margin: '1em 0',
    padding: 0,
  },
  rowWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

class ShoppingCart extends React.Component {
  getTotalPrice = (all) => {
    var total = 0

    all.forEach(function(row) {
      total += row.amount * row.product.price
    })

    return total
  }

  render() {
    return (
      <div style={ styles.wrapper }>

        {this.props.cart.all.length === 0 ? (
          <div style={{textAlign: 'center'}}>
            Shopping Cart empty
          </div>
        ) : (
          <Fragment>
            {this.props.cart.all.map(function(item, i){
              return(
                <div key={item.product.id} style={styles.rowWrapper}>
                  <div style={{paddingLeft: '12px'}}>
                    { item.product.name }
                  </div>
                  <div style={styles.buttonWrapper}>
                    { item.amount } x ${ item.product.price }
                    <IconButton onClick={
                      () => this.props.remove(i)
                    }>
                      <Close style={{color: 'tomato'}}>
                        close
                      </Close>
                    </IconButton>
                  </div>
                </div>
              )
            },this)}
          </Fragment>
        )}

        {this.props.cart.all.length === 0 ? (
          null
        ) : (
          <Fragment>
            <hr style={styles.hr}/>
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '12px'}}>
              <div>
                ${this.getTotalPrice(this.props.cart.all)}
              </div>
              <Button>
                Order
              </Button>
            </div>
          </Fragment>
        )}

      </div>
    )
  }
}

export default ShoppingCart
