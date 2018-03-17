import { combineReducers } from "redux"

import products from "./productsReducer"
import user from "./userReducer"
import alert from "./alertReducer"

export default combineReducers({
  products,
  user,
  alert,
})
