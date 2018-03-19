import { combineReducers } from "redux"

import products from "./productsReducer"
import user from "./userReducer"
import alert from "./alertReducer"
import cart from "./cartReducer"

export default combineReducers({
  products,
  user,
  alert,
  cart
})
