import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Users } from 'pages';
import Menu from 'components/Menu';
import UserDetail from 'pages/UserDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:userId" component={UserDetail} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
