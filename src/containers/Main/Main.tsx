import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';

const Main: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <div>list</div>
        </Route>
        <Route path='/favorites'>
          <div>favorites</div>
        </Route>
      </Switch>
      {`Main PAGE ${process.env.REACT_APP_API_URL}`}
    </Router>
  );
};

export default Main;
