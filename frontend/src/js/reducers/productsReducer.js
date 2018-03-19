const defaultState = {
    all: [],
    cart: [],
    fetching: false,
    fetched: true,
    selectedProduct: null
}

export default function reducer(state=defaultState, action) {

    switch (action.type) {
      case "FETCH_PRODUCTS": {
        return {...state, fetching: true}
      }
      case "FETCH_PRODUCTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PRODUCTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          all: action.payload,
        }
      }
      case "SET_SELECTED_PRODUCT":{
        return{
          ...state,
          selectedProduct: action.payload
        }
      }
      case "ADD_TO_CART":{
        return{
          ...state,
          cart: [ ...state.cart, action.payload ]
        }
      }
      default:{
        return state
      }
    }

}
