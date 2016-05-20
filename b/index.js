import React from 'react';

import './actions';
import './reducer';

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                a业务
                <button className="btn btn-default" onClick={::this.handleClick}>hello</button>
            </div>
        );
    }

    handleClick() {
        this.props.actions.b_hello();
    }
}

export default Component;