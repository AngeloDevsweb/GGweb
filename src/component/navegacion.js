import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const styles = {'background-color': '#000000'};

export default class navegacion extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg navbar-dark" style={styles}>
                        <div className="container">
                            
                            <Link className="brand" to="/">
                                GGwebgaming
                            </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">                                      
                                        <Link className="navigation" to="/">
                                            HOME
                                        </Link>
                                    </li>
                                    <li className="nav-item active">
                                        
                                        <Link className="navigation" to="/noticias">
                                            NOTICIAS
                                        </Link>
                                    </li>
                                    
                                
                                </ul>
                        </div>
                        </div>
                    </nav>
            </div>
        )
    }
}
