import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';
import {apiPath} from '../../services/config';


class PassRecovery extends Component {
    state={
        email:"",
        currentPassword:"",
        newPassword:"",
        emailErr:"",
        currentErr:"",
        newPassErr:"",
        resetonoff:"",
        token: ""
    };
     componentWillReceiveProps(nextProps){
        let {loggedIn}= nextProps;
        if(!loggedIn){
            localStorage.setItem("route", this.props.location.pathname );
            this.props.history.push('/signIn')
        }
    }
    componentDidMount(){
        let {loggedIn}= this.props;
        if(!loggedIn){
            localStorage.setItem("route", this.props.location.pathname );
            this.props.history.push('/signIn')
        }
    }
    validate=()=>{
        let emailErr="";
        let currentErr="";
        let newPassErr="";
        if(this.state.currentPassword==="" || this.state.currentPassword!== this.props.userStoreData.Password){
            console.log("currentpassword",this.state.currentPassword);
            currentErr="incorrect";
        }
       if(this.state.newPassword==="" ){
            console.log("n ewpassword",this.state.newPassword);
            newPassErr="incorrect";
        }
        if(!this.state.email.includes('@') || this.state.email!== this.props.userStoreData.Email){
            console.log("email ",this.state.email);
            emailErr="email error";
        }
         if(emailErr  || currentErr || newPassErr ){
            console.log("handled well");
            this.setState({emailErr , currentErr, newPassErr});
            return false;
        }
        return true;
    };
    handleChange= event => {
        const isCheckbox = event.target.type==="checkbox";
        console.log("form data", event.target.value)
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
            formData.append('OldPassword', this.state.currentPassword);
            formData.append('Password', this.state.newPassword);
            console.log("form data is valid");
            axios.post(apiPath + "account/changepassword", formData,{
                headers:{
                    Authorization: 'Bearer ' + this.props.userStoreData.token
                }
            })
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
        console.log("data new data", this.props.userStoreData);

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
                                        <input type="text" name="currentPassword" placeholder="Current Password" onChange={this.handleChange} />
                                        <div className="form-error">{this.state.currentErr}</div>
                                        <input type="text" name="newPassword" placeholder="New Password" onChange={this.handleChange} />
                                        <div className="form-error">{this.state.newPassErr}</div>
                                    </div>
                                    <div className="sign-up-btn">
                                        <button className="btn text-uppercase" onClick={this.handleSubmit}>Reset</button>
                                    </div>
                                    <div className="already-member">
                                        <p>Don't have an account? <Link to="register-hire">Sign Up</Link></p>
                                    </div>
                                </div>
                            }
                            {
                                this.state.resetonoff === "success" &&
                                <div className="already-member">
                                    <h1 className="text-center">Your Password has been changed</h1>
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