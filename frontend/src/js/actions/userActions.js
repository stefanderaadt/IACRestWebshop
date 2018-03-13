import axios from "axios"

export function login(username, password) {
  return function(dispatch) {
    dispatch({type: "FETCH_LOGIN"})

    axios.post("http://localhost:8000/login", {
        "username":username,
        "password":password
      })
      .then((response) => {
        dispatch({type: "FETCH_LOGIN_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_LOGIN_REJECTED", payload: err})
      })
  }
}
