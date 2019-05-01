import React, { Component } from 'react';
import { Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/home';
import CharactersInfo from './components/pages/charactersId';
import Search from './components/pages/search';
import history from '../app/history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/character/:id' component={CharactersInfo} />
          <Route exact path='/search/:name' component={Search} />
        </Switch>
      </Router>
    )
  }
}

export default App;