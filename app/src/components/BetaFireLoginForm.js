import React from 'react';
import Form from "./common/form";
import logo from '.././betafire.png'

export default class BetaFireLoginForm extends Form {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <div>
                                <div className="row">
                                    <div className="offset-md-3 col-md-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <img className="logo" src={logo} alt={`BetaFire`} />
                                                <h1 className="h4 text-gray-900 mb-4">Log in</h1>
                                                <p className="info">Need a Betafire account? <a className="small" href="register.html">Create an Account</a></p>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" className="form-control form-control-user" id="email" placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input type="password" className="form-control form-control-user" id="password" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <a className="info small" href="forgot-password.html">Forgot Password?</a>
                                                </div>
                                                <div className="form-group">
                                                    <a href="index.html" className="btn btn-primary btn-user btn-block">
                                                        Log in
                                                    </a>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Keep me logged in</label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}