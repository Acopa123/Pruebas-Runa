import React from 'react';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
