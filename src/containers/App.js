import React, { Component } from 'react';


import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
/* Import components */
//import App from './containers/App';
import store, { history } from './Store'
import Home from '../components/Home';
import About from '../components/About';
/* CSS */
import '../index.css';

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to load.
        </p>
      </div>
    );
  }
}
*/
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route>
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Route>
    </Router>
  </Provider>  
)

export default hot(module)(App);
