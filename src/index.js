/** @format */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './Style.css'
import 'react-calendar/dist/Calendar.css'

import reportWebVitals from './reportWebVitals'
import configureStore from './store/configureStore'
import ScrollToTop from './app/helpers/ScrollToTop'
import 'react-toastify/dist/ReactToastify.min.css'
import { loadEvent } from './pages/events/eventAction'

const store = configureStore()
store.dispatch(loadEvent())
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
