import React, {Component} from 'react';
import {Route} from "react-router-dom";
import '.././betafire.css';
import BetaFireLoginForm from "./BetaFireLoginForm";

export default class BetaFireApp extends Component {
    render() {
        return (
            <Route exact path={`/login`} component={BetaFireLoginForm} />
        )
    }
}