export function addToCart(item){
  return{
    type: "ADD_TO_CART",
    payload: item
  }
}

export function openCart(){
  return {type: "OPEN_CART"}
}

export function closeCart(){
  return {type: "CLOSE_CART"}
}
