import React, { Component } from 'react';
import { connect } from 'react-redux';

class OutputTextBox extends Component {
    render() {
        return (
            <div className="w-100">
                <textarea className="w-100"></textarea>
            </div>
        )
    }
}
export default connect(null, {})(OutputTextBox)
