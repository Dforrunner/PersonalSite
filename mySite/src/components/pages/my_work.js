import React from 'react';

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
        fetch("/api/projects-pg/")
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
            <div className="white-text pt-lg-5 pb-lg-5 p-lg-5">
                {
                    items.map((item) =>
                        <div key={item.pk} className="">
                            <div id='MockupImageGroup'>
                                <img src={item.desktop_img} alt="Desktop Image" className="desktop-img" />
                                <img src={item.tablet_img} alt="Tablet Image" className="tablet-img" />
                                <img src={item.mobile_img} alt="Mobile Image" className="mobile-img" />
                            </div>

                            <div className='p-5'>
                                <h2>{item.title}</h2>
                                <p className="font-small primary-font">{item.description}</p>
                                <div className="d-flex flex-row flex-nowrap">
                                    {item.tools_used.map(tools =>
                                        <span className="p-1 tools-used waves-effect" key={tools.pk}>{tools.skill_name}</span>
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