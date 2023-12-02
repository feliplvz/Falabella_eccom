import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Page from './views/page'
import PageRefresco from './views/page-refresco'
import PageEstacionamiento from './views/page-estacionamiento'
import Page2 from './views/page2'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Page} exact path="/page" />
        <Route component={PageRefresco} exact path="/page-refresco" />
        <Route
          component={PageEstacionamiento}
          exact
          path="/page-estacionamiento"
        />
        <Route component={Page2} exact path="/page2" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
