import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    

    return <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark py-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">Weather Api
                <i className="fas fa-cloud mx-2"></i></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="About">About</Link>
                        </li>
                    </ul>
        
                  
                </div>
            </div>
        </nav>
    </div>;
};

export default Navbar;



