export function addToCart(product, amount){
  return{
    type: "ADD_TO_CART",
    payload: {product: product, amount: amount}
  }
}

export function openCart(){
  return {type: "OPEN_CART"}
}

export function closeCart(){
  return {type: "CLOSE_CART"}
}
