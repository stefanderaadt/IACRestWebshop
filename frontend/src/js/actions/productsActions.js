import axios from "axios"

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

export function fetchNewProducts() {
  return function(dispatch) {
    dispatch({type: "FETCH_NEW_PRODUCTS"})

    axios.get("http://localhost:8000/products/new")
      .then((response) => {
        dispatch({type: "FETCH_NEW_PRODUCTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_NEW_PRODUCTS_REJECTED", payload: err})
      })
  }
}

export function fetchProduct(id) {
  return function(dispatch) {
    dispatch({type: "FETCH_PRODUCT"})

    axios.get("http://localhost:8000/products/"+id)
      .then((response) => {
        //Product not found
        if(response.status === 204){
          dispatch({type: "FETCH_PRODUCT_REJECTED", payload: "Product not found"})
        }else{
          dispatch({type: "FETCH_PRODUCT_FULFILLED", payload: response.data})
        }
      })
      .catch((err) => {
        dispatch({type: "FETCH_PRODUCT_REJECTED", payload: err})
      })
  }
}
