import React, {Component} from 'react';
import 'bootswatch/dist/spacelab/bootstrap.min.css'; 

export default class Card extends Component{

    // addCar = () => this.setState({cart: 11})

    render(){
        return<div className="col-md-4 mb-2">
            <div className="card box-shadow shadow">
                {/* {console.log("cards",this.props.movie.Title)} */}
                <div className="card-header bg-secondary text-dark">
                    <h2 className="h6 card-text">{this.props.movie.Title}</h2>
                    <h2 className="h6 card-title">{this.props.movie.Year} - {this.props.movie.Type}</h2>
                </div>
                <div className="card-body bg-dark">
                    <img 
                        alt="Poster de pelicula"
                        src={this.props.movie.Poster}
                        className="card-img-top"  
                    >                        
                    </img>
                </div>  
                <div className="card-footer bg-secondary ">
                    <button 
                        className="btn btn-dark"
                    >
                    Cart
                </button>
                </div>
            </div>
        </div>
    }
}