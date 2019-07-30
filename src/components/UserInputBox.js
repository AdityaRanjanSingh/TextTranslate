import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/UserInput.css';
class UserInputBox extends Component {
    onUserInput = (e) => {
        console.log(e);
    }
    render() {
        return (
            <div className="w-100">
                <textarea className="w-100 user-input-text-area" placeholder="Type text here to translate..." onChange={this.onUserInput}></textarea>
            </div>
        )
    }
}
export default connect(null, {})(UserInputBox);