import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
    </Switch>
  </div>
)

export default App
