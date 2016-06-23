import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';

let App = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="nav">
            <Link to="app">Home</Link>&nbsp;|&nbsp;
            <Link to="login">Login</Link>
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});
