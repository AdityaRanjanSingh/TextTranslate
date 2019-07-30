import React, { Component } from 'react';
import { Languges } from '../js/constants';
import '../css/Actions.css';


export default class Actions extends Component {
    componentDidMount() {

    }
    render() {
        let options = Languges.map((lan) => {
            return <option key={lan} value={lan}>{lan}</option>
        })
        return (
            <div className="w-100 d-flex align-items-center justify-content-center mb-3 mt-3 flex-lg-column flex-sm-column">
                <select className="select">
                    {options}
                </select>
                <div className="mt-2 mb-2 d-flex justify-content-center">
                    <button className="translate-button">Translate</button>
                </div>

            </div>
        )
    }
}
