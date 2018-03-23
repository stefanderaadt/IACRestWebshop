const defaultState = {
    all: [],
    fetching: false,
    fetched: true,

    new: [],
    fetching_new: false,
    fetched_new: true,

    product: {},
    fetching_one: false,
    fetched_one: true,
    found_one: false
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

    case "FETCH_NEW_PRODUCTS": {
      return {...state, fetching_new: true}
    }
    case "FETCH_NEW_PRODUCTS_REJECTED": {
      return {...state, fetching_new: false, error_new: action.payload}
    }
    case "FETCH_NEW_PRODUCTS_FULFILLED": {
      return {
        ...state,
        fetching_new: false,
        fetched_new: true,
        new: action.payload,
      }
    }

    case "FETCH_PRODUCT": {
      return {...state, fetching_one: true, found_one: false}
    }
    case "FETCH_PRODUCT_REJECTED": {
      return {
        ...state,
        fetching_one: false,
        error_one: action.payload,
        found_one: false
      }
    }
    case "FETCH_PRODUCT_FULFILLED": {
      return {
        ...state,
        fetching_one: false,
        fetched_one: true,
        found_one: true,
        product: action.payload,
      }
    }

    default:{
      return state
    }
  }
}
