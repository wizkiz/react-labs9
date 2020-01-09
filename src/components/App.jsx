import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../redux/reducers'

import PageEmployeesList from './PageEmployeesList';
import PageEmployeeCreate from './PageEmployeeCreate';

const store = createStore(rootReducer, {}, composeWithDevTools())

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={PageEmployeesList}/>
        <Route exact path="/new" component={PageEmployeeCreate}/>
      </Switch>
    </Router>
  </Provider>
)

export default App