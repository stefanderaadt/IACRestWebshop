import React, { Fragment } from "react"
import { IconButton, Button } from 'material-ui'
import Close from 'material-ui-icons/Close'
import { Link } from "react-router-dom"

import {isToday, getDiscountedProductPrice, getCurrentDiscountPercentage, getTotalCartPrice} from "../helpers/ProductHelper"

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
                    { item.amount } x
                    {isToday(item.product.discounts)? (
                      <Fragment><span style={{color: 'tomato'}}>
                        ${ item.product.price }</span> - (%{getCurrentDiscountPercentage(item.product.discounts)}) ${getDiscountedProductPrice(item.product)}</Fragment>
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
          </Fragment>
        )}

        {this.props.cart.all.length === 0 ? (
          null
        ) : (
          <Fragment>
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '48px'}}>
              <b style={{paddingRight: '12px'}}>Total:</b> ${getTotalCartPrice(this.props.cart.all)}
            </div>
            <hr style={styles.hr}/>
            <div style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '12px'}}>
              <Button
                component={ Link }
                to="/orders">
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
