import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './containers/Home';
import Region from './containers/Region';
import Info from './containers/Info';
import Header from './components/Header';
const store = configureStore();
const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header history={history}/>
            <Route exact path="/" component={Home} />
            <Route path="/region/:region/:id" component={Region} />
            <Route path="/pokemon/info/:id" component={Info} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
