import axios from "axios";

export function fetchProducts() {
  return function(dispatch) {
    dispatch({type: "FETCH_PRODUCTS"})

    axios.get("http://localhost:8000/products")
      .then((response) => {
        dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err})
      })
  }
}

export function fetchProduct(id) {
  return {type: "FETCH_PRODUCT", payload: id}
}
