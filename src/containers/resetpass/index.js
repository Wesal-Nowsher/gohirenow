import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import {apiPath} from '../../services/config'


class PassRecovery extends Component {
    state={
        email:"",
        emailErr:"",
        resetonoff:""
    };
    validate=()=>{
        let   emailErr="";
        if(!this.state.email.includes('@')){
            emailErr="name connot be empty";
        }
        if(emailErr){
            this.setState({emailErr});
            return false;
        }
        return true;
    };
    handleChange= event => {
        const isCheckbox = event.target.type==="checkbox";
        this.setState({
            [event.target.name]: isCheckbox? event.target.checked:event.target.value
        })
    };
    handleSubmit= event => {
        event.preventDefault();
        const isValid= this.validate();
        if(isValid){
            const formData = new FormData();
            formData.append('Email', this.state.email);
            axios.post(apiPath + "account/forgotpassword", formData)
                .then(res => {
                    if(res.data === "Success"){
                        this.setState({resetonoff:"success"})
                    }
                })
                .catch(err => {
                    if (err.response && err.response.status === 401) {
                        this.setState({invalidMessage: true, loading: false});
                        window.confirm('email or password is incorrect')
                    }
                });
        }

    };
    render() {
        let{dispatch, loggedIn}= this.props;

        return (
            <Layout dispatch={dispatch} loggedIn={loggedIn}>
                <div className="registration">
                    <div className="container pt-3">
                        <div className="inner-div">
                            <div className="row flex-column top-text">
                                <h2 className="text-center">Reset your password</h2>
                            </div>
                            {
                                this.state.resetonoff !== "success" &&
                                <div className="register-work-form">
                                    <div className="inner-pass-form">
                                        <input type="email" name="email" placeholder="Email Address" onChange={this.handleChange} />
                                        <div className="form-error">{this.state.emailErr}</div>
                                    </div>
                                    <div className="sign-up-btn">
                                        <button className="btn text-uppercase" onClick={this.handleSubmit}>Reset</button>
                                    </div>
                                    <div className="already-member">
                                        <p>Don't have an account? <Link to="register-hire">Sign Up</Link></p>                                    </div>
                                </div>
                            }
                            {
                                this.state.resetonoff === "success" &&
                                <div className="already-member">
                                    <h1 className="text-center">Check your mail</h1>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(PassRecovery);