import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import About from './components/static/About';
import Landing from './components/static/Landing';
import Contact from './components/static/Contact';
import Gallery from './components/gallery/Gallery';

import {Provider} from 'react-redux'
import store from './store'

//import Gallery from './containers/Gallery';


import './Styles.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
              <main className="main">
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/gallery" component={Gallery} />
                  <Route component={Landing} />
                </Switch>
              </main>
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
