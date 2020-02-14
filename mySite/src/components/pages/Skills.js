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
        fetch(`${process.env.REACT_APP_HOST}/api/skills-pg/`)
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
            <div className="animated slideInLeft" id='SkillsPageWrapper'>
                <h1 className="pg-header">Skills/Tools</h1>
                <div className='skill-categories'>
                {
                    items.map((item) =>
                        <div key={item.pk}>
                            <ul className="skill-list">
                                <h4 className="skill-category-title">{item.skill_category}</h4>
                                {item.skill_names.map(skill =>
                                    <li key={skill.pk}><i className="icon-right-dir cyan-text"> </i>{skill.skill_name}</li>
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