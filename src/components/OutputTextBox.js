import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/OutputText.css'

class OutputTextBox extends Component {
    render() {
        return (
            <div className="w-100">
                <p className="w-100 output-text-area">{this.props.outputText}</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    outputText: state.translate.outputText
})
export default connect(mapStateToProps, {})(OutputTextBox)
