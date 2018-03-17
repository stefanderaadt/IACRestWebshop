import axios from "axios"
import {history} from "../helpers/history"

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
        localStorage.setItem('username', username)

        //Set logged in to true
        dispatch({type: "USER_FETCH_LOGIN_FULFILLED", payload: username})

        history.push('/')

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
    if(localStorage.getItem('login_token')){
      dispatch({
        type: "USER_LOGGED_IN",
        payload: localStorage.getItem('username')
      })
    }
  }
}

export function logout(){
  //Delete localStorage login token
  localStorage.removeItem('login_token')
  localStorage.removeItem('username')

  //Set logged in to false
  return {type: "USER_LOGOUT"}
}
