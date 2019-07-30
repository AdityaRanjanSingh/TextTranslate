import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/UserInput.css';
import { inputText } from '../actions/inputAction'
class UserInputBox extends Component {
    onUserInput = (e) => {
        this.props.inputText(e.target.value)
    }
    render() {
        return (
            <div className="w-100">
                <textarea className="w-100 user-input-text-area" placeholder="Type text here to translate..." onChange={this.onUserInput}></textarea>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    inputText: state.input.inputText
})
export default connect(mapStateToProps, { inputText })(UserInputBox);