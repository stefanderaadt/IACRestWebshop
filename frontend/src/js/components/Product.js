import React, {Fragment} from "react"
import { Paper, Input, Button, Typography, Grid } from 'material-ui'

import {isToday, getDiscountedProductPrice, getCurrentDiscountPercentage} from "../helpers/ProductHelper"

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      amount: 1
    }
  }

  componentDidMount(){
    //Get product
    this.props.fetchProduct(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.id !== newProps.match.params.id){
      //Get product
      this.props.fetchProduct(this.props.match.params.id)
    }
  }

  amountChange = (value) => {
    if(value > 10 || value < 0) return

    this.setState((prevState, props) => {
      return{
        ...prevState,
        amount: value
      }
    })
  }

  render() {
    return (
      <Fragment>
      {this.props.products.found_one ? (
        <Paper key={this.props.products.product.id} style={styles.paper}>
          <Grid container spacing={24}>

            <Grid style={{display: 'flex', flexDirection: 'column'}}
              item xs={12} sm={6}
            >
              <div style={{fontWeight: 'bold'}}>
                { this.props.products.product.name }
              </div>
              <div>
                { this.props.products.product.description }
              </div>
              <div>
                {isToday(this.props.products.product.discounts)? (
                  <Fragment><span style={{color: 'red'}}>
                    ${ this.props.products.product.price }</span> - (%{getCurrentDiscountPercentage(this.props.products.product.discounts)}) ${getDiscountedProductPrice(this.props.products.product)}</Fragment>
                  ) : (
                  <Fragment>${ this.props.products.product.price }</Fragment>
                )}
              </div>
            </Grid>

            <Grid style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}
              item xs={12} sm={6}
            >
              <div style={{marginRight: '20px'}}> Amount: </div>
              <Input style={{width: '50px'}}
                type="number"
                value={this.state.amount}
                onChange={(e) => {this.amountChange(e.target.value)}}/>
              <Button style={{marginLeft: '12px'}}
                onClick={
                  () => {
                    this.amountChange(1)
                    this.props.addToCart(this.props.products.product, this.state.amount)
                  }
                }>
                Add to cart
              </Button>
            </Grid>

          </Grid>
        </Paper>
      ) : (
        <Fragment>
          <h3>Product: {this.props.match.params.id} not found!</h3>
        </Fragment>
      )}
      </Fragment>
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

export default Product
