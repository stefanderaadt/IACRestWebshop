import axios from "axios"

//User login action
export function login(username, password) {
  return function(dispatch) {
    dispatch({type: "USER_FETCH_LOGIN"})

    axios.post("http://localhost:8000/login", {
        "username":username,
        "password":password
      })
      .then((response) => {
        //Set local storage token
        localStorage.setItem('login_token', response.headers.authorization)

        //Set logged in to true
        dispatch({type: "USER_FETCH_LOGIN_FULFILLED"})

        dispatch({type: "DISPLAY_SUCCESS_ALERT",payload: "Logged in!"})
      })
      .catch((err) => {
        dispatch({type: "USER_FETCH_LOGIN_REJECTED", payload: err})

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

export function logout(){
  //Delete localStorage login token
  localStorage.removeItem('login_token')

  //Set logged in to false
  return {type: "USER_LOGOUT"}
}
