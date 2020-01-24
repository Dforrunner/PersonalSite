import React, {Component} from 'react';

export default class Favicon extends Component {
    render() {
        return (
            <div>
                <link rel="icon" type="image/png" sizes="16x16" href={this.props.faviconPath} />
            </div>
        )
    }
}