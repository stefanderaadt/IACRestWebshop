export function displaySuccessAlertAction(message){
  return {
    type: "DISPLAY_SUCCESS_ALERT",
    payload: message
  }
}

export function displayErrorAlertAction(message){
  return {
    type: "DISPLAY_ERROR_ALERT",
    payload: message
  }
}

export function endAlertAction(){
  return {
    type: "END_ALERT"
  }
}
