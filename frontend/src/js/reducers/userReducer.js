const defaultState = {
  token: null,
  loggingIn: false,
  loggedIn: false,
  error: null
}

export default function reducer(state=defaultState, action) {

    switch (action.type) {
      case "TRY_LOGIN": {
        return {...state, loggingIn: true}
      }
      case "TRY_LOGIN_REJECTED": {
        return {...state, loggedIn: false, error: action.payload}
      }
      case "TRY_LOGIN_FULFILLED": {
        return {
          ...state,
          loggingIn: false,
          loggedIn: true
        }
      }
      case "USER_LOGGED_IN": {
        return {
          ...state,
          loggingIn: false,
          loggedIn: true
        }
      }
    }

    return state
}
