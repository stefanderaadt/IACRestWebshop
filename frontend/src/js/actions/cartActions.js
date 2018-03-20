export function addToCart(product, amount){
  return function(dispatch) {
    dispatch({type: "DISPLAY_SUCCESS_ALERT",payload: "Added item to cart!"})
    dispatch({type: "ADD_TO_CART", payload: {product: product, amount: amount}})
  }
}

export function removeFromCart(index){
  return {
    type: "REMOVE_FROM_CART",
    payload: {index: index}
  }
}

export function openCart(){
  return {type: "OPEN_CART"}
}

export function closeCart(){
  return {type: "CLOSE_CART"}
}
