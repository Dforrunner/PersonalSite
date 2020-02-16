import React from 'react';
import {NavLink} from 'react-router-dom';
import ImageWebp from "../mics/ImageWebp";

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
        <a className="nav-social-btn" href={link_to} target="_blank">
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

    /**
     * Event listeners that are used to control the collapse sidebar
     */
    eventListeners = () => {
        // When dismiss or the overlay is clicked
        document.querySelector('.overlay').addEventListener('click', ()=>{
            // hide overlay and sidebar
            document.querySelector('#sidebar').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
            document.querySelector('#collapseBars').classList.remove('hidden');
        });
        document.querySelector('#collapseBars').addEventListener('click', () => {
             // show sidebar and overlay
             document.querySelector('#sidebar').classList.add('active');
             document.querySelector('.overlay').classList.add('active');
             document.querySelector('#collapseBars').classList.add('hidden');
        });
    };

    componentDidMount() {
        this.eventListeners();

        fetch('/api/sidebar/')
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
                <button id="collapseBars"><i className="icon-menu"> </i></button>

                <div className="f-row-center p-2">
                    <NavLink to="/">
                        {isLoaded &&
                            <ImageWebp
                                srcWebp={items.logo_webp}
                                src={items.logo}
                                alt="M"
                                id="logo"
                            />
                        }
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
                    {social_links(items.github, "github-circled")}
                    {social_links(items.linkedin, "linkedin-rect")}
                    {social_links(items.instagram, "instagram-1")}

                    <div className="f-row-center pt-3">
                        <ImageWebp
                            srcWebp={items.avatar_webp}
                            src={items.avatar}
                            className="nav_profile_img"
                            alt="Avatar image"
                        />
                    </div>
                </div>
            </nav>
        )
    }
}
