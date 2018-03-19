const defaultState = {
    all: [],
    open: false
}

export default function reducer(state=defaultState, action) {

    switch (action.type) {
      case "ADD_TO_CART":{
        return{
          ...state,
          all: [ ...state.all, action.payload ]
        }
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
      default:{
        return state
      }
    }

}
