import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import Home from './home';

import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <h1>This is app page</h1>
        <Router>
            <Link to="/two">Two</Link>
            <Link to="/three">Three</Link>           
            <Switch> 
            <Route exact path="/" render={Home} />
            <Route path="/two" render={PageTwo} />
            <Route path="/three" render={PageThree} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
