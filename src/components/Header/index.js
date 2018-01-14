import React from "react";
import { Link } from 'react-router-dom'
import {__Header__} from "./styled";

const Header = () => {
    return (
        <__Header__>
            <header>
                <p>Lorem Ipsum - best radio station</p>
                <Link to="/donate">
                    <div className="donate">
                        <p>Donate us</p>
                        <i className="fa fa-money" aria-hidden="true"/>
                    </div>
                </Link>
            </header>
        </__Header__>
    )
};


export default Header;