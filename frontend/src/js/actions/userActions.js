import axios from "axios"

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
      })
      .catch((err) => {
        dispatch({type: "USER_FETCH_LOGIN_REJECTED", payload: err})
      })
  }
}

export function logout(){
  //Delete localStorage login token
  localStorage.removeItem('login_token')

  //Set logged in to false
  return {type: "USER_LOGOUT"}
}
