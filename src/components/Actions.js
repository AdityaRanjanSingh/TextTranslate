import React, { Component } from 'react';
import { Languges } from '../js/constants';
import '../css/Actions.css';
import { translateText } from '../actions/translateActions';
import { selectionChange } from '../actions/selectAction';
import { connect } from 'react-redux';


class Actions extends Component {
    componentDidMount() {
        this.props.selectionChange('yoda')
    }
    translateText = () => {
        // console.log(this.props.inputText, this.props.lang);
        this.props.translateText(this.props.inputText, this.props.lang)
    }
    selectionChange = (e) => {
        this.props.selectionChange(e.target.value)
    }

    render() {
        let options = Languges.map((lan) => {
            return <option key={lan} value={lan}>{lan}</option>
        })
        return (
            <div className="d-flex align-items-center justify-content-center mb-3 mt-3 flex-lg-column flex-sm-column row">
                <div className="col-sm-12">
                    <select className="select-css" onChange={this.selectionChange}>
                        {options}
                    </select>
                </div>
                <div className="mt-2 mb-2 d-flex justify-content-center col-sm-12">
                    {/* <button onClick={this.translateText} className="translate-button">Translate</button> */}
                    <div className="button" onClick={this.translateText}>
                        <span>Translate</span>
                        <svg>
                            <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                            <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                        </svg>
                    </div>
                </div>

            </div>
        )
    }
};
const mapStateToProps = state => ({
    inputText: state.input.inputText,
    lang: state.language.language
})
export default connect(mapStateToProps, { translateText, selectionChange })(Actions)