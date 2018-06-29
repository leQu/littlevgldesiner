import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
/* Import components */
//import App from './containers/App';
import store, { history } from './containers/Store'
import registerServiceWorker from './registerServiceWorker';
import Home from './components/Home';
import About from './components/About';
import Example from './components/Example';
/* CSS */
import './index.css';
import './styles/Example.css'

const Routes = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route>
				<Switch>
		    	<Route exact path="/" component={Home}/>
		    	<Route path="/about" component={About}/>
		    	<Route path="/example" component={Example}/>
		    	<Route>
		    		<h1>404 Not Found</h1>
		    	</Route>
				</Switch>
			</Route>
		</ConnectedRouter>
  </Provider>
)

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
