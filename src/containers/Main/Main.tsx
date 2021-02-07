import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home';

const Main: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/favorites'>
          <div>favorites</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
