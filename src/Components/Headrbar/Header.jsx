import React  from 'react';
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <span className="navbar-brand mb-0 h1"> Name_List </span>
            <ul className="navbar-nav">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Contact Us</a></li>

            </ul>
        </nav>
    );
}


export default Header;