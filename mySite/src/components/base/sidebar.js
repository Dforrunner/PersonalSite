import React, {Component, useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function Sidebar(props){

    // NavLink macro. Seperating all the common things and making it a reusable component
    const nav_link = (to, data_after, fa) => {
        let fontAwesome = `fas ${fa} fa-2x btn-content-change`;
        return (
            <NavLink exact={true} to={to} activeStyle={{ backgroundColor: '#1c1c1c'}} className="btn shadow-none nav-btn white-text">
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
            <a className="btn shadow-none nav-social-btn text-muted " href={link_to} target="_blank">
                <i className={fontAwesome}> </i>
            </a>
        )
    };
    return (
        <nav id="sidebar">

            <button className="btn btn-outline-white rounded" id="collapseBars"><i className="fas fa-bars"> </i></button>

            <div className="p-2">
                <div className=" d-flex flex-row justify-content-center ">
                    <NavLink to="/">
                        <img src={props.sidebar.logo} alt='M' id="logo" />
                    </NavLink>
                </div>
            </div>

            <div className="p-2">
                {nav_link('/', 'Home', 'fa-home')}
                {nav_link('/about', 'About', 'fa-user-tie')}
                {nav_link('/experience', 'Experience', 'fa-laptop-code')}
                {nav_link('/my-work', 'My Work', 'fa-folder-open')}
                {nav_link('/skills', 'Skills', 'fa-cog')}
                {nav_link('/contact', 'Contact', 'fa-address-book')}
            </div>

            <div className="p-2">
                {social_links(props.sidebar.github, "github")}
                {social_links(props.sidebar.linkedin, "linkedin")}
                {social_links(props.sidebar.instagram, "instagram")}

                <div className=" d-flex flex-row justify-content-center">
                    <img src={"https://avatars1.githubusercontent.com/u/33268028?s=400&v=4"}
                     className="rounded-circle nav_profile_img" alt="avatar image" />
                </div>
            </div>
        </nav>
    )
}
