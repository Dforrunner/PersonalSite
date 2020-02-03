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
        fetch("/api/experience-list/")
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
            <div className="white-text p-5 ml-5 mr-5 primary-font" id="ExperiencePageWrapper">
                <h1 className="secondary-font">My Experience</h1>
                {
                    items.map(item =>
                        <div className="pt-4" key={item.pk}>
                            <h4>
                                {item.title}
                                <span className="cyan-text"> @{item.company_name}</span>
                            </h4>
                            <h6 className="text-muted">
                                {item.start_month}, {item.start_year} - {item.end_month}, {item.end_year}
                            </h6>
                            <ul className="pt-2">
                                {
                                    item.responsibilities.map(r =>
                                        <li className="pt-2" key={r.pk}><i className="fas fa-caret-right cyan-ic mr-1"> </i> {r.responsibility}</li>
                                    )
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        );
    }
}