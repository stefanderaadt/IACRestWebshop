import React, {Fragment} from "react"
import { Paper, Input, Button, Typography, Grid } from 'material-ui'
import { Link } from 'react-router-dom'

import {
  isToday,
  getDiscountedProductPrice,
  getCurrentDiscountPercentage,
  getCurrentDiscountBeginEnd
} from "../helpers/ProductHelper"

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: []
    }
  }

  amountChange = (value, id) => {
    if(value > 10 || value < 0) return

    this.setState((prevState, props) => {
      const index = prevState.amount.findIndex(x => x.id === id)

      if(index === -1){
        // Create new amount for object
        return {amount: [...prevState.amount, {id: id, amount: value}]}
      }else{
        //  Get new amount array
        const newAmount = [...prevState.amount]

        // Set new value in object in array and create new object
        newAmount[index] = {...newAmount[index], amount: value}

        // Return new array with new object
        return {amount: newAmount}
      }
    })
  }

  render() {
    return (
      <div>
        <div style={{padding: '12px'}}>
          <Typography variant="display1">
            All products
          </Typography>

          {this.props.products.all.map(function(item, i){
            var amount

            if (this.state.amount.find(x => x.id === item.id)) {
              amount = this.state.amount.find(x => x.id === item.id).amount
            }else{
              amount = 1
            }

            return (

              <Paper key={item.id} style={styles.paper}>
                <Grid container spacing={24}>
                  <Grid style={{display: 'flex', flexDirection: 'column'}}
                    item xs={12} sm={6}
                  >
                    <Link to={"/product/" + item.id} style={{textDecoration: 'none', color: 'black'}}>
                      <div style={{fontWeight: 'bold'}}>
                        { item.name }
                      </div>
                      <div>
                        { item.description }
                      </div>
                      <div>
                        {isToday(item.discounts)? (
                            <Fragment><span style={{color: 'red'}}>
                              ${ item.price }</span> - (%{getCurrentDiscountPercentage(item.discounts)}) ${getDiscountedProductPrice(item)}<br />
                              {getCurrentDiscountBeginEnd(item.discounts)}
                            </Fragment>
                          ) : (
                          <Fragment>${ item.price }</Fragment>
                        )}
                      </div>
                    </Link>
                  </Grid>
                  <Grid style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}
                    item xs={12} sm={6}
                  >
                    <div style={{marginRight: '20px'}}> Amount: </div>
                    <Input style={{width: '50px'}}
                      type="number"
                      value={amount}
                      onChange={(e) => {this.amountChange(e.target.value, item.id)}}/>
                    <Button style={{marginLeft: '12px'}}
                      onClick={
                        () => {
                          this.amountChange(1, item.id)
                          this.props.addToCart(item, amount)
                        }
                      }>
                      Add to cart
                    </Button>
                  </Grid>

                </Grid>
              </Paper>

            )
          }, this)}

        </div>
      </div>
    )
  }
}

const styles = {
  paper: {
    padding: '12px',
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}

export default Products
