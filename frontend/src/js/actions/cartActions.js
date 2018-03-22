import axios from "axios"
import {history} from "../helpers/history"

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

export function completeOrder(order) {
  return function(dispatch) {
    dispatch({type: "COMPLETE_ORDER"})

    axios.post(
      "http://localhost:8000/orders",
      order,
      {
        headers: { Authorization: localStorage.getItem('login_token')}
      }
    ).then((response) => {
      dispatch({type: "COMPLETE_ORDER_FULFILLED"})

      //Go to success page
      history.push("/order/success")
    })
    .catch((err) => {
      dispatch({type: "COMPLETE_ORDER_REJECTED", payload: err})

      //Send error alert
      dispatch({type: "DISPLAY_ERROR_ALERT",payload: "Something went wrong processing your order!"})
    })
  }
}
