import React  from 'react';
import {Link} from 'react-router-dom';
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <span className="navbar-brand mb-0 h1"> Name_List </span>
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/namelist">Name List</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/namelistc">Name List-Class</Link></li>
            </ul>
        </nav>
    );
}


export default Header;