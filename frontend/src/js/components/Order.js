import React, {Fragment} from "react"
import { IconButton, Button, Paper } from 'material-ui'
import Close from 'material-ui-icons/Close'
import { Link } from "react-router-dom"

import {
  isToday,
  getDiscountedProductPrice,
  getCurrentDiscountPercentage,
  getTotalCartPrice
} from "../helpers/ProductHelper"

const styles = {
  center: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: '250px',
    height: '20px',
    textAlign: 'center',
    color: '#9E9E9E'
  },
  paper: {
    padding: '12px',
  },
}

class Order extends React.Component {
  render() {
    return (
      <div style={{padding: '12px'}}>
        {this.props.cart.all.length === 0 ? (
          <div style={styles.center}>
            Shopping Cart empty
          </div>
        ) : (
          <Paper style={styles.paper}>
            {this.props.cart.all.map(function(item, i){
              return(
                <div key={item.product.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  { item.product.name }
                    <div >
                      { item.amount } x &nbsp;
                      {isToday(item.product.discounts)? (
                        <Fragment><span style={{color: 'tomato', paddingRight: '2px'}}>
                          ${ item.product.price } </span> - (%{getCurrentDiscountPercentage(item.product.discounts)}) ${getDiscountedProductPrice(item.product)}</Fragment>
                        ) : (
                          <Fragment>${ item.product.price }</Fragment>
                        )
                      }
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
          </Paper>
        )}

        {this.props.cart.all.length === 0 ? (
          null
        ) : (
          <Fragment>
            <div style={{display: 'flex', justifyContent: 'flex-end', padding: '12px', paddingRight: '24px'}}>
              <b style={{paddingRight: '12px'}}>Total:</b> ${getTotalCartPrice(this.props.cart.all)}
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '12px'}}>
              <Button
                onClick={() => this.props.completeOrder({
                  'orderRows': this.props.cart.all
                })}>
                Order
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}

export default Order
