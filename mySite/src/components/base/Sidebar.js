import React, {Component, useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function Sidebar(props){

    // NavLink macro. Separating all the common things and making it a reusable component
    const nav_link = (to, data_after, icon) => {
        icon = `icon-${icon}`;
        return (
            <NavLink exact={true} to={to} activeStyle={{ backgroundColor: '#1c1c1c'}} className="btn nav-btn white-text">
                <i className={icon}> </i>
                <span data-after={data_after}> </span>
            </NavLink>
        )
    };
    // Social link macro
    const social_links = (link_to, icon) => {
        icon = `icon-${icon}`;
        return (
            <a className="nav-social-btn text-muted social-btn" href={link_to} target="_blank">
                <i className={icon}> </i>
            </a>
        )
    };
    return (
        <nav id="sidebar">
            <button className="btn btn-black rounded" id="collapseBars"><i className="icon-menu"> </i></button>

            <div className="f-row-center p-2">
                <NavLink to="/">
                    <img src={props.sidebar.logo} alt='M' id="logo" />
                </NavLink>
            </div>

            <div>
                {nav_link('/', 'Home', 'home')}
                {nav_link('/about', 'About', 'user')}
                {nav_link('/experience', 'Experience', 'laptop')}
                {nav_link('/my-work', 'My Work', 'folder-open')}
                {nav_link('/skills', 'Skills', 'cog')}
                {nav_link('/contact', 'Contact', 'address-book')}
            </div>

            <div>
                <div className="social-btn-group">
                    {social_links(props.sidebar.github, "github-circled")}
                    {social_links(props.sidebar.linkedin, "linkedin-squared")}
                    {social_links(props.sidebar.instagram, "instagram-1")}
                </div>
                <div className="f-row-center">
                    <img src={"https://avatars1.githubusercontent.com/u/33268028?s=400&v=4"}
                     className="nav_profile_img" alt="avatar image" />
                </div>
            </div>
        </nav>
    )
}
