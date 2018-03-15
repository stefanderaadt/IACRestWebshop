const defaultState = {
  loggingIn: false,
  loggedIn: false,
  error: null
}

export default function reducer(state=defaultState, action) {

    switch (action.type) {
      case "USER_FETCH_LOGIN": {
        return {...state, loggingIn: true}
      }
      case "USER_FETCH_LOGIN_REJECTED": {
        return {...state, loggedIn: false, error: action.payload}
      }
      case "USER_FETCH_LOGIN_FULFILLED": {
        return {
          ...state,
          loggingIn: false,
          loggedIn: true,
        }
      }
      case "USER_LOGGED_IN": {
        return {
          ...state,
          loggingIn: false,
          loggedIn: true
        }
      }
      case "USER_LOGOUT":{
        return{
          ...state,
          loggingIn: false,
          loggedIn: false,
          error: null
        }
      }
    }

    return state
}
