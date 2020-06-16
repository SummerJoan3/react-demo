import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Test from './test';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};
export default App;
