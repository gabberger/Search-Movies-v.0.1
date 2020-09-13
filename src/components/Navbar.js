import React, {Component} from 'react';

export default class Navbar extends Component{

    render(){
        return <div className="box-shadow shadow-sm sticky-top navbar navbar-expand-lg bg-dark mb-5 d-flex justify-content-lg-between">
                    
                        <h1 className="h3 navbar-brand">My movie store</h1>
                        <div>
                            <a 
                                href="/" 
                                className="btn btn-dark m-1 p-2"
                            >
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                                <span> {this.props.cart}</span>
                            </a>
                            <a href="/" className="btn btn-dark m-1 p-2">Signin</a>
                            <a href="/" className="btn btn-dark m-1 p-2">Signout</a>       
                        </div>
                 
         </div>
    }
}