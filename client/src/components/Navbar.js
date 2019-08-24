import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Google Books Search</span>
                <div class="col-xs-3">
                    <input placeholder="Search for a book" className="form-control" id="ex2" type="text"/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;