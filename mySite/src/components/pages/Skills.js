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
                <h1 className="secondary-font white-text pl-5">Skills/Tools</h1>
                <div className='skill-categories'>
                {
                    items.map((item) =>
                        <div key={item.pk} className="pt-5 pr-5">
                            <ul className="skill-list">
                                <h4 className="white-text black p-3 rounded-top">{item.skill_category}</h4>
                                {item.skill_names.map(skill =>
                                    <li className="white-text pl-3 pt-1" key={skill.pk}>{skill.skill_name}</li>
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