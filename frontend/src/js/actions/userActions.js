import axios from "axios"

//User login action
export function login(username, password) {
  return function(dispatch) {
    dispatch({type: "TRY_LOGIN"})

    axios.post("http://localhost:8000/login", {
        "username":username,
        "password":password
      })
      .then((response) => {
        dispatch({type: "TRY_LOGIN_FULFILLED"})

        dispatch({type: "DISPLAY_SUCCESS_ALERT",payload: "Logged in!"})
      })
      .catch((err) => {
        console.log(err)
        dispatch({type: "TRY_LOGIN_REJECTED", payload: err.response})

        dispatch({type: "DISPLAY_ERROR_ALERT",payload: "Gebruikersnaam of wachtwoord is niet juist!"})
      })
  }
}

//Check if user is logged in when reloading page
export function checkLoggedIn(){
  return function(dispatch) {
    dispatch({type: "USER_LOGGED_IN"})
  }
}
