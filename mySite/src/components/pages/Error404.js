import React from 'react';
import {Link} from "react-router-dom";

export default class Error404 extends React.Component{
    render() {
        return (
            <div className="f-column-center" id="Error404PageWrapper">
                <div>
                    <h1>ERROR 404 - page not found.</h1>
                    <Link to="/" className="home-contact-btn pt-3"> BACK TO HOME PAGE </Link>
                </div>
            </div>
        );
    }
}