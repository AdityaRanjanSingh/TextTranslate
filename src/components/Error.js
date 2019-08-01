import React, { Component } from 'react';
import { connect } from 'react-redux';


class Error extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
    inputText: state.input.inputText,
    lang: state.language.language
})
export default connect(mapStateToProps, {})(ActErrorions)