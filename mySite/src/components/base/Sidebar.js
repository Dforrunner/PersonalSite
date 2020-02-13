import React, {Component, useState} from 'react';
import {NavLink} from 'react-router-dom';

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

export default class Sidebar extends React.Component{
constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_HOST}/api/sidebar/`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result[0]
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
    const {error, isLoaded, items} = this.state;
        return (
            <nav id="sidebar">
                <button className="btn btn-black rounded" id="collapseBars"><i className="icon-menu"> </i></button>

                <div className="f-row-center p-2">
                    <NavLink to="/">
                        <img src={items.logo} alt='M' id="logo"/>
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
                        {social_links(items.github, "github-circled")}
                        {social_links(items.linkedin, "linkedin-squared")}
                        {social_links(items.instagram, "instagram-1")}
                    </div>
                    <div className="f-row-center">
                        <img src={items.avatar} className="nav_profile_img" alt="avatar image"/>
                    </div>
                </div>
            </nav>
        )
    }
}
