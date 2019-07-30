import React, { Component } from 'react';
import { Languges } from '../js/constants';
import '../css/Actions.css';
import { translateText } from '../actions/translateActions';
import { connect } from 'react-redux';


class Actions extends Component {
    componentDidMount() {

    }
    translateText = () => {
        // this.props.translateText(inputText, lang)
    }
    selectionChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        let options = Languges.map((lan) => {
            return <option key={lan} value={lan}>{lan}</option>
        })
        return (
            <div className="w-100 d-flex align-items-center justify-content-center mb-3 mt-3 flex-lg-column flex-sm-column">
                <select onChange={this.selectionChange} className="select">
                    {options}
                </select>
                <div className="mt-2 mb-2 d-flex justify-content-center">
                    <button onClick={this.translateText} className="translate-button">Translate</button>
                </div>

            </div>
        )
    }
}
export default connect(null, { translateText })(Actions)