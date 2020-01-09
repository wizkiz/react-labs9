import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../redux/reducers'

import PageEmployeesList from './PageEmployeesList';
import PageEmployeeCreate from './PageEmployeeCreate';
import PageLogin from './PageLogin'

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={PageLogin} />
        <Route exact path="/list" component={PageEmployeesList} />
        <Route exact path="/new" component={PageEmployeeCreate} />
      </Switch>
    </Router>
  </Provider>
)

export default App