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
                b业务 {this.props.b.b_1.name}
                <button className="btn btn-default" onClick={::this.handleClick1}>hello 1</button>
                <hr/>
                b业务 {this.props.b.b_2.name}
                <button className="btn btn-default" onClick={::this.handleClick2}>hello 2</button>
            </div>
        );
    }

    handleClick1() {
        this.props.actions.b_hello1();
    }

    handleClick2() {
        this.props.actions.b_hello2();
    }
}

export default Component;