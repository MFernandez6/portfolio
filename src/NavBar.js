import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./NavBar.css";

function NavBar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="NavBar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>

                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}> <ReorderIcon /> </button>
            </div>
            <div className="rightSide">
                Miguel Angel Fernandez
            </div>
        </div>
    )
}

export default NavBar;