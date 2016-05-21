import React from 'react';

import './actions';
import './reducer';

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                a业务 {this.props.a.name}
                <button className="btn btn-default" onClick={::this.handleClick}>hello</button>
            </div>
        );
    }

    handleClick() {
        this.props.actions.a_hello();
    }
}

export default Component;