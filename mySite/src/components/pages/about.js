import React from 'react';

export default class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        };
    }

    componentDidMount() {
        fetch("/api/about-pg/")
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
            <div className="vh-100">
                <div className="about-text-content">
                    <h1>{items.p_title}</h1>
                    <p>{items.p1}</p>
                    <p>{items.p2}</p>
                    <p>{items.p3}</p>
                </div>
                <img className="about-prof-img" src={items.profile_img} alt="Profile Image" />
            </div>
        );
    }
}