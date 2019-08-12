import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class SingleBeer extends Component {
    state = {
        beer: []
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers?ids=' + this.props.match.params.id)
            .then(res => this.setState({ beer: res.data }))
    }

    render() {

        if (this.state.beer[0]) {
            const { id, name, description, image_url, abv, first_brewed } = this.state.beer[0];
            return (
                <div className="beer">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <div className="beer__image-wrapper">
                                <Link to={`/${id}`}><img src={image_url} alt={name} className="beer__image" /></Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h2 className="beer__name">{name}</h2>
                            <p className="beer__description">{description}</p>
                            <p className="beer__first-brewed">First brewed: {first_brewed}</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="beer__star">
                                <h1 className="beer__abv">
                                    {abv}%
                            </h1>
                            </div>
                        </div>
                    </div>
                <Link className="btn" style={{ marginTop: '30px'}} to="/">
                        Go back
                </Link>
                </div>
            )
        } else {
            return(
                <div>NO BEER</div>
            )
        }
    }
}

export default SingleBeer
