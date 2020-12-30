import React  from 'react';
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <span className="navbar-brand mb-0 h1"> Name_List </span>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>

            </ul>
        </nav>
    );
}


export default Header;