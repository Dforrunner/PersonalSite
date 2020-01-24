import React, {Component, useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function Sidebar(props){

    // NavLink macro. Seperating all the common things and making it a reusable component
    const nav_link = (to, data_after, fa) => {
        let fontAwesome = `fas ${fa} fa-2x btn-content-change`;
        return (
            <NavLink exact={true} to={to} activeStyle={{ backgroundColor: 'grey'}} className="btn shadow-none nav-btn white-text">
                <i className={fontAwesome}>
                    <span data-after={data_after}> </span>
                </i>
            </NavLink>
        )
    };
    // Social link macro
    const social_links = (link_to, fa) => {
        let fontAwesome = `fab fa-${fa} fa-social-btn`;
        return (
            <a className="btn shadow-none nav-social-btn text-muted" href={link_to} target="_blank">
                <i className={fontAwesome}> </i>
            </a>
        )
    };
    return (
        <div>
            <div className="row collapseBarsWrapper">
                <button className="btn btn-outline-white rounded" id="collapseBars"><i className="fas fa-bars"> </i></button>
            </div>
            <div className="navbar" id="sidebar">
                <div id="dismiss"><i className="far fa-times-circle white-text fa-2x"> </i></div>
                <div className="logo_wrapper">
                    <NavLink to="/">
                        <img src={props.sidebar.logo} alt='M' id="logo" />
                    </NavLink>
                </div>
                <div className="row" role="group" aria-label="Vertical button group">
                    <div className="nav-btn-group">
                        {nav_link('/', 'Home', 'fa-home')}
                        {nav_link('/about', 'About', 'fa-address-card')}
                        {nav_link('/experience', 'Experience', 'fa-graduation-cap')}
                        {nav_link('/my-work', 'My Work', 'fa-folder-open')}
                        {nav_link('/skills', 'Skills', 'fa-tools')}
                        {nav_link('/contact', 'Contact', 'fa-address-book')}
                    </div>

                    <div className="nav-social-btn-group">
                        {social_links(props.sidebar.github, "github")}
                        {social_links(props.sidebar.linkedin, "linkedin")}
                        {social_links(props.sidebar.instagram, "instagram")}
                        <img src={"https://avatars1.githubusercontent.com/u/33268028?s=400&v=4"}
                             className="rounded-circle nav_profile_img" alt="avatar image" height="35" />
                    </div>
                </div>
            </div>
        </div>
    )
}
