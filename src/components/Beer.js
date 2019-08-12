import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Beer extends Component {

    render() {
        const { id, name, description, image_url, abv, first_brewed } = this.props.beer;
        return (
            <div className="beer">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="beer__image-wrapper">
                        <Link to={`/beers/${id}`}><img src={image_url} alt={name} className="beer__image" /></Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h2 className="beer__name">{name}</h2>
                        <p className="beer__description">{description}</p>
                        <p className="beer__first-brewed">First brewed: {first_brewed}</p>
                        <Link className="btn" to={`/beers/${id}`}>More</Link>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="beer__star">
                            <h1 className="beer__abv">
                                {abv}%
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Beer
