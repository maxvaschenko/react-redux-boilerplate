import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from 'src/settings/history'

import App from './App'

import './styles/core.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
)
