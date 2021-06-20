import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Navbar from  './Navbar/Navbar';
import ScrollToTop from './Navbar/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
