import React, { Component } from 'react';

export class Searcher extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.title);
        this.props.searchBeer(this.state.title);
        this.setState({ title: '' });
    }

    //onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onChange = (e) => this.props.searchBeer(e.target.value);
    
    render() {
        return (
            <div className="col-md-6">
                <h2 className="text-center">
                    Find beer
                </h2>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Search beer..."
                        onChange={this.onChange}
                    />
                </form>
            </div>
        )
    }
}

export default Searcher
