import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/OutputText.css'

class OutputTextBox extends Component {
    render() {
        return (
            <div className="w-100">
                <textarea className="w-100 output-text-area" placeholder="The dark side I sense in you! Yeesssssss!  . . "></textarea>
            </div>
        )
    }
}
export default connect(null, {})(OutputTextBox)
