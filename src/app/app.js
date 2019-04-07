import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// imports components
import Home from './components/pages/home';
import Character from './components/characters/character';
import Search from './components/pages/search';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/character/:id' component={Character} />
          <Route exact path='/character/search/:name' component={Search} />
        </Switch>
      </Router>
    )
  }
}

export default App;
