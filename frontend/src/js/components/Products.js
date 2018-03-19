import React from "react"
import { Paper, Button, Typography } from 'material-ui'

class Products extends React.Component {
  componentDidMount(){
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>

        <div style={{padding: '12px'}}>

          <Typography variant="display1">
            products
          </Typography>

          {this.props.products.all.map(function(item, i){
            return (
              <Paper key={item.id} style={styles.paper}>
                { item.name }
                <Button
                  onClick={
                    () => this.props.addToCart(item)
                  }>
                  Add to cart
                </Button>
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
  },
}

export default Products
