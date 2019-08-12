import React, { Component } from 'react';
import Beer from './Beer';

export class Beers extends Component {
    render() {
        console.log(this.props.beers.length);
        if (this.props.beers.length > 0) {
            return this.props.beers.map((beer) => (
                <Beer key={beer.id} beer={beer} />
            ));
        } else {
            return (
                <div>NO BEER</div>
            )
        }
    }
}

export default Beers
