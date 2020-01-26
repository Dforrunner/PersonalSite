import React from 'react';

export default class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("/api/skills-pg/")
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
            <div className="white-text vh-100">
                <div className="row skill-content">
                    {
                        items.map((item) =>
                            <div key={item.pk} className="col-4 pt-5">
                                <ul className="skill-list">
                                    <h4 className="black p-3 rounded-top">{item.skill_category}</h4>
                                    {item.skill_names.map(skill =>
                                        <li className="pl-3 pt-1" key={skill.pk}>{skill.skill_name}</li>
                                    )}
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}