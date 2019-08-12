import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Beers from './components/Beers';
import axios from 'axios';
import Searcher from './components/Searcher';
import Filters from './components/Filters';
import SingleBeer from './components/pages/SingleBeer';
import './App.css';

class App extends Component {
  state = {
    beers: [],
    search: '',
    from: '',
    to: ''
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => this.setState({ beers: res.data }))
  }

  searchBeer = (name) => this.setState({ search: name });
  filterFromBeer = (from) => this.setState({ from: from });
  filterToBeer = (to) => this.setState({ to: to });

  
  render() {
    let filteredBeers = this.state.beers
      .filter(
        (beer) => {
          return beer.name.toLowerCase().indexOf(this.state.search) !== -1;
        })
      .filter(beer => ((this.state.to !== '' ? beer.abv >= this.state.from && beer.abv <= this.state.to : beer.abv >= this.state.from)))
      ;

    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <div className="filters">
                  <div className="row">
                    <Searcher searchBeer={this.searchBeer} />
                    <Filters filterFromBeer={this.filterFromBeer} filterToBeer={this.filterToBeer} />
                  </div>
                </div>
                <Beers beers={filteredBeers} />
              </React.Fragment>
            )} />
            <Route path="/beers/:id" component={SingleBeer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
