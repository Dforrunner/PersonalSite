import React from 'react';

function LinkIcon(href, icon) {
    icon = `icon-${icon} cyan-text`;
    return(
        <a href={href} target="_blank">
            <i className={icon}> </i>
        </a>
    )
}
export default class MyWork extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_HOST}/api/projects-pg/`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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
            <div className="white-text primary-font animated fadeIn" id='MyWorkPgWrapper'>
                <h1 className="pg-header">My Work</h1>
                {
                    items.map((item) =>
                        <div key={item.pk} className="animated slideInLeft">
                            <div className='mockup-image-group'>
                                {!item.desktop_img ? "" :
                                    <img src={item.desktop_img} alt="Project Desktop Image" className="desktop-img" />
                                }{!item.tablet_img ? "" :
                                    <img src={item.tablet_img} alt="Project Tablet Image" className="tablet-img" />
                                }{!item.mobile_img ? "" :
                                    <img src={item.mobile_img} alt="Project Mobile Image" className="mobile-img" />
                                }
                            </div>

                            <div className='project-info-wrapper'>
                                <div className="f-row-between">
                                    <h2>{item.title}</h2>
                                    <div className="mt-3">
                                        {item.github ? LinkIcon(item.github, "github-circled") : ""}
                                        {item.site_link ? LinkIcon(item.site_link, "link-ext") : ""}
                                        {item.video ? LinkIcon(item.video, "youtube-play") : ""}
                                    </div>
                                </div>

                                <p className="project-description">{item.description}</p>
                                <div className="row">
                                    {item.tools_used.map(tools =>
                                        <span className="tools-used" key={tools.pk}>{tools.skill_name}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}