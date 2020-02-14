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
            loading: false,
            projects: [],
            hasMore: true,
            offset: 0,
            limit: 2
        };
         // Scroll event
        window.onscroll = () => {
            const {state: {error, loading, hasMore}} = this;
            if (error || loading || !hasMore) return;

            // Check to see if user has scrolled to the bottom of the page
            if (document.documentElement.scrollHeight -
                document.documentElement.scrollTop ===
                document.documentElement.clientHeight){
                this.loadProjects()
            }
        }
    }

    /**
     * Fetching projects based on the set limit every time it's called
     */
    loadProjects = () =>{
        this.setState({loading:true}, () => {
            const {offset, limit} = this.state;
            fetch(`${process.env.REACT_APP_HOST}/lazy-load-projects/?limit=${limit}&offset=${offset}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        this.setState({
                            loading: false,
                            projects: [...this.state.projects, ...result.project_list],
                            offset: offset + limit,
                            hasMore: result.has_more
                        });
                    },
                    (error) => {
                        this.setState({
                            loading: false,
                            error
                        });
                    }
                )
        })
    };

    componentDidMount() {
        this.loadProjects();
    }

    render() {
        const {error, loading, hasMore, projects} = this.state;
        return (
            <div className="white-text primary-font animated fadeIn" id='MyWorkPgWrapper'>
                <h1 className="pg-header">My Work</h1>
                {
                    projects.map((project) =>
                        <div key={project.pk} className="animated slideInLeft">
                            <div className='mockup-image-group'>
                                {project.desktop_img &&
                                    <img src={project.desktop_img} alt="Project Desktop Image" className="desktop-img" />
                                }
                                {project.tablet_img &&
                                    <img src={project.tablet_img} alt="Project Tablet Image" className="tablet-img" />
                                }
                                {project.mobile_img &&
                                    <img src={project.mobile_img} alt="Project Mobile Image" className="mobile-img" />
                                }
                            </div>

                            <div className='project-info-wrapper'>
                                <div className="f-row-between">
                                    <h2>{project.title}</h2>
                                    <div className="mt-3">
                                        {project.github ? LinkIcon(project.github, "github-circled") : ""}
                                        {project.site_link ? LinkIcon(project.site_link, "link-ext") : ""}
                                        {project.video ? LinkIcon(project.video, "youtube-play") : ""}
                                    </div>
                                </div>

                                <p className="project-description">{project.description}</p>
                                <div className="row">
                                    {project.tools_used.map(tools =>
                                        <span className="tools-used" key={tools.pk}>{tools.skill_name}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }
                {error && <div>{error}</div>}
                {loading && <div className='f-row-center pt-3 mt-3'><h3>Loading Projects...</h3></div>}
                {!hasMore && <div className='f-row-center pt-3 mt-3'><h3>No more results</h3></div>}
            </div>
        );
    }
}