import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import { createStore } from 'redux'
import courseReducer from './store/reducer.js'
import { Provider } from 'react-redux'


const store = createStore(courseReducer)

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>,
)
