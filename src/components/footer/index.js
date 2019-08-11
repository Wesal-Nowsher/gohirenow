import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
                <div className="footer">
                    <div className="container">
                        <div className="row info-div">
                            <div className="col-sm-3 img-div">
                                <img src={require("../../assets/chaticon.png")} alt=""/>
                            </div>
                            <div className="col-sm-5 content-div">
                                <h1>Want more Information?</h1>
                                <p>
                                    we seek to create long-term relationships built on results.
                                </p>
                            </div>
                            <div className="col-sm-4 btn-div">
                                <button className="btn text-uppercase get-a-quote">get a quote</button>
                            </div>

                        </div>
                        <div className="footer-mid">
                            <div className="row footer-anchors">
                                <div className="col-sm-3">
                                </div>
                                <div className="col-sm-2">
                                    <Link to="how-it-works">How it works</Link>
                                </div>
                                <div className="col-sm-2">
                                    <p>Post a job</p>
                                </div>
                                <div className="col-sm-2">
                                    <p>Blog</p>
                                </div>
                                <div className="col-sm-3">
                                </div>
                            </div>
                            <div className="row footer-anchors">
                                <div className="col-sm-3">
                                </div>
                                <div className="col-sm-2">
                                    <p>Pricing</p>
                                </div>
                                <div className="col-sm-2">
                                    <p>Get a job</p>
                                </div>
                                <div className="col-sm-2">
                                    <Link to="/contactUs">Contact us</Link>
                                </div>
                                <div className="col-sm-3">
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="cont-center">
                                    <hr/>
                                    <p>Copyright © 2020,GoHireNow. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cont-center">
                                    <div className="footer-icon">
                                        <i className="fa fa-facebook"/>
                                        <i className="fa fa-twitter"/>
                                        <i className="fa fa-instagram"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Footer;