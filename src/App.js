import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from './configureStore';
import Home from './containers/Home';
import Header from './components/Header';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header/>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
