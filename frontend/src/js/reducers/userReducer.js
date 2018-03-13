const defaultState = {
  token: null,
  loggingIn: false,
  loggedIn: false,
  error: null
}

export default function reducer(state=defaultState, action) {

    switch (action.type) {
      case "FETCH_LOGIN": {
        return {...state, loggingIn: true}
      }
      case "FETCH_LOGIN_REJECTED": {
        return {...state, loggedIn: false, error: action.payload}
      }
      case "FETCH_LOGIN_FULFILLED": {
        return {
          ...state,
          loggingIn: false,
          loggedIn: true,
          token: action.payload
        }
      }
    }

    return state
}
