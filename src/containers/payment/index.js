import React, {Component} from 'react';
import Layout from '../../components/Layout'

class SignIn extends Component {
    render() {
        let{dispatch, loggedIn}= this.props;
        return (
            <Layout dispatch={dispatch} loggedIn={loggedIn}>
                <div className="registration" id="payment">
                    <div className="container pt-3">
                        <div className="inner-div">
                            <div className="row flex-column top-text ">
                                <h2 className="text-center">Payment Details</h2>
                                <p className="text-center">PLAN BUSINESS  -  <span>$199.99/month</span></p>
                            </div>
                            <div className="register-work-form">
                                <div className="inner-pass-form">
                                    <input type="text" placeholder="Card Name"/>
                                    <input type="text" placeholder="Credit Card Number"/>
                                    <div className="select-fields">
                                        <select placeholder="Month">
                                            <option value="" disabled selected>Month</option>
                                            <option>Jan</option>
                                            <option>Feb</option>
                                            <option>Mar</option>
                                            <option>Apr</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>Jul</option>
                                            <option>Aug</option>
                                            <option>Sep</option>
                                            <option>Oct</option>
                                            <option>Nov</option>
                                            <option>Dec</option>
                                        </select>
                                        <select>
                                            <option value="" disabled selected>Year</option>
                                            <option>2000</option>
                                            <option>2001</option>
                                            <option>2002</option>
                                            <option>2003</option>
                                            <option>2004</option>
                                            <option>2005</option>
                                            <option>2006</option>
                                            <option>2007</option>
                                            <option>2008</option>
                                            <option>2009</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                        </select>
                                    </div>
                                    <input type="text" placeholder="CCV"/>
                                </div>
                                <div className="sign-up-btn">
                                    <button className="btn text-uppercase">SIGN IN</button>
                                </div>
                                <div className="already-member">
                                    <p>This will renew automatically every month.</p>
                                    <p>You can cancel at any time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row payment-images">
                            <div className="col-sm-2">
                                <img src={require("../../assets/new-visa.png")} alt=""/>
                            </div>
                            <div className="col-sm-2">
                                <img src={require("../../assets/master.png")} alt=""/>
                            </div>
                            <div className="col-sm-2">
                                <img src={require("../../assets/axp.png")} alt=""/>
                            </div>
                            <div className="col-sm-2">
                                <img src={require("../../assets/discover.png")} alt=""/>
                            </div>
                            <div className="col-sm-2">
                                <img src={require("../../assets/mcafee.png")} alt=""/>
                            </div>
                            <div className="col-sm-2">
                                <img src={require("../../assets/norton.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default SignIn;