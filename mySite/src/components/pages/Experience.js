import React from 'react';

export default class Experience extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('/api/experience-list/')
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
            <div className="animated slideInLeft" id="ExperiencePageWrapper">
                <h1 className="pg-header">My Experience</h1>
                {
                    items.map(item =>
                        <div className="pt-3" key={item.pk}>
                            <h3>
                                {item.title}
                                <span className="cyan-text"> @{item.company_name}</span>
                            </h3>
                            <p className="text-muted">
                                {item.start_month}, {item.start_year} - {item.end_month}, {item.end_year}
                            </p>
                            <ul className="pt-1">
                                {
                                    item.responsibilities.map(r =>
                                        <li className="pt-2" key={r.pk}><i className="icon-right-dir cyan-text"> </i> {r.responsibility}</li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
                {error && <div>{error}</div>}
            </div>
        );
    }
}