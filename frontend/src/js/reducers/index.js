import { combineReducers } from "redux"

import products from "./productsReducer"
import user from "./userReducer"

export default combineReducers({
  products,
  user,
})
