import React from "react";
import Logo from "../img/general_deskr_logo_fz.png"

function Header () {
    return (
        <div className="header">
            <img className="logo" src={Logo}  alt="logo"/>
            <h1 className="title"> Матрица судьбы</h1>
        </div>
    )
}

export default Header;