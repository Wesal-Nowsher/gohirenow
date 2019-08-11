 import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Link, withRouter} from 'react-router-dom';


class PassRecovery extends Component {
   
    render() {
        let{dispatch, loggedIn}= this.props;
        return (
            <Layout dispatch={dispatch} loggedIn={loggedIn}>
                <div className="registration" id="reset-confirm">
                    <div className="container pt-3">
                        <div className="inner-div">
                            <div className="row flex-column top-text">
                                <h2 className="text-center">Reset your password</h2>
                            </div>
                                <div className="register-work-form">
                                    <div className="inner-pass-form">
                                    	<p class="text-center">Please enter a new password </p>
                                        <input type="password" name="password" placeholder="Password"/>
                                        <div class="checkbox-div"><input type="checkbox"  /> <p>Show password</p></div>
                                    </div>
                                    <div className="sign-up-btn">
                                        <button className="btn text-uppercase" onClick={this.handleSubmit}>UPDATE</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(PassRecovery);