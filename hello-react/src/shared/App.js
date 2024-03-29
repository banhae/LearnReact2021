import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Contact } from 'pages';
import Menu from 'compoents/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </div>
        );
    }
}

export default App;