const defaultState = {
    all: [],
    open: false,

    ordering: false,
    ordered: true,
    error: null
}

export default function reducer(state=defaultState, action) {

    switch (action.type) {
      case "ADD_TO_CART":{
        const index = state.all.findIndex(x => x.product.id === action.payload.product.id)

        if(index === -1){
          // Create new shopping cart line
          return{
            ...state,
            all: [ ...state.all, {
              product: action.payload.product,
              amount: action.payload.amount
            } ]
          }
        }else{
          // Get right constants
          const all = [...state.all]
          const product = all[index].product
          const newProduct = action.payload.product

          // Set new value in object in array and create new object
          all[index] = {
            ...all[index],
            product: {...product, newProduct},
            amount: parseInt(all[index].amount) + parseInt(action.payload.amount)
          }

          // Return new array with new objects
          return {...state, all: all}
        }

        return{
          ...state,
          all: [ ...state.all, action.payload ]
        }
      }
      case "REMOVE_FROM_CART":{
        // Get right constants
        const all = [...state.all]

        // Remove item with given index from array
        all.splice(action.payload.index, 1);

        // Retrun updated array
        return {...state, all: all}
      }
      case "OPEN_CART":{
        return{
          ...state,
          open: true
        }
      }
      case "CLOSE_CART":{
        return{
          ...state,
          open: false
        }
      }
      case "COMPLETE_ORDER":{
        return{
          ...state,
          ordering: false
        }
      }
      case "COMPLETE_ORDER_REJECTED": {
        return {...state, ordering: false, error: action.payload}
      }
      case "COMPLETE_ORDER_FULFILLED": {
        return {
          ...state,
          ordering: false,
          ordered: true,
        }
      }
      default:{
        return state
      }
    }



}
