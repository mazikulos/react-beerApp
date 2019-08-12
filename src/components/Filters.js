import React, { Component } from 'react';

export class Filters extends Component {
    onChangeFrom = (e) => this.props.filterFromBeer(e.target.value.replace(/,/g, '.'));
    onChangeTo = (e) => this.props.filterToBeer(e.target.value.replace(/,/g, '.'));

    render() {
        return (
            <div className="col-md-6">
                <h2 className="text-center">
                    Filters
                </h2>
                <form onSubmit={this.onSubmit}>
                    <div className="filter-line">
                        <span>
                            ABV: 
                        </span>
                        <input
                            type="text"
                            name="from"
                            pattern="[0-9]*"
                            className="form-control form-control--filter"
                            placeholder="From..."
                            onChange={this.onChangeFrom}
                        />
                        <input
                            type="text"
                            name="to"
                            className="form-control form-control--filter"
                            placeholder="To..."
                            onChange={this.onChangeTo}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Filters
