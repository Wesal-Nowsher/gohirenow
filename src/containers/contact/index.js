import React, {Component} from 'react';
import Layout from '../../components/Layout'
import axios from 'axios';
import {apiPath} from '../../services/config'
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

const initialState={
    fullName:"",
    email:"",
    message:"",
    title:"",
    fullNameErr:"",
    emailErr:"",
    messageErr:"",
    titleErr:"",
    contactpageonoff:"",
};

class PassRecovery extends Component {
    state=initialState;
    handleChange= event => {
        const isCheckbox = event.target.type==="checkbox";
        this.setState({
            [event.target.name]: isCheckbox? event.target.checked:event.target.value
        })
    };
    validate=()=>{
        let fullNameErr="";
        let   emailErr="";
        let   messageErr="";
        let titleErr="";
        if(!this.state.fullName){
            fullNameErr = "incorrect";
        }if(!this.state.message){
            messageErr="incorrect";
        }
        if(!this.state.title){
            titleErr="incorrect";
        }
        if(!this.state.email.includes('@')){
            emailErr="incorrect";
        }
        if(fullNameErr || emailErr || messageErr || titleErr){
            this.setState({fullNameErr, emailErr, messageErr, titleErr});
            return false;
        }
        return true;
    };
    handleSubmit= event => {
        event.preventDefault();
        const isValid= this.validate();
        if(isValid){
            console.log(this.state);
            this.setState({initialState});

            const formData = new FormData();
            formData.append('Email', this.state.email);
            formData.append('Name', this.state.fullName);
            formData.append('Title', this.state.title);
            formData.append('Comment', this.state.message);
            axios.post(apiPath + "Home/ContactUs", formData)
                .then(res => {
                    console.log("res",res);
                    if(res.data === "Success"){
                        this.setState({contactpageonoff:"success"})
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
                <div className="registration" id="contact">
                    <div className="container pt-3">
                        <div className="inner-div">
                            <div className="row flex-column top-text ">
                                <h2 className="text-center head">Contact Us</h2>
                            </div>
                            {
                                this.state.contactpageonoff !== "success" &&
                                <div className="register-work-form">
                                    <form className="inner-pass-form">
                                        <div>
                                            <input type="text" placeholder="Full Name" name="fullName" value={this.state.fullName} onChange={this.handleChange}/>
                                            <div className="form-error">{this.state.fullNameErr}</div>
                                            <input type="text" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange}/>
                                            <div className="form-error">{this.state.emailErr}</div>
                                        </div>
                                        <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
                                        <div className="form-error">{this.state.titleErr}</div>
                                        <textarea placeholder="Message" name="message" value={this.state.message} onChange={this.handleChange} />
                                        <div className="form-error">{this.state.messageErr}</div>
                                    </form>
                                    <div className="sign-up-btn">
                                        <button className="btn text-uppercase" onClick={this.handleSubmit}>SEND</button>
                                    </div>
                                    <div className="already-member">
                                        <p>Our team answers support ticket within 24 hours.</p>
                                    </div>
                                </div>
                            }
                            {
                                this.state.contactpageonoff === "success" &&
                                <div className="already-member">
                                    <h1 className="text-center">we have recieved your query.</h1>
                                    <p>Our team answers support ticket within 24 hours.</p>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default PassRecovery;