import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import App from "./js/components/App"
import store from "./js/store"

const root = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, root);
