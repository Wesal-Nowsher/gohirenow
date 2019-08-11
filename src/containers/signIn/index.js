import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Link, withRouter, Redirect} from 'react-router-dom';
import axios from 'axios';
import {apiPath} from '../../services/config';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';


class SignIn extends Component {

    state = {
        email: "",
        password: "",
        remember:false,
        loading: false,
        showErr: ""
    };
    componentDidMount(){
        let {loggedIn}= this.props;
        if(loggedIn){
            localStorage.setItem("route", this.props.location.pathname );
            this.props.history.push('/')
        }
    }
    componentWillReceiveProps(nextProps){
        let {loggedIn}= nextProps;
        if(loggedIn){
            localStorage.setItem("route", this.props.location.pathname );
            this.props.history.push('/')
        }
    }
    login (event) {
        event.preventDefault();
        let {email, password, remember} = this.state;
        let {dispatch} = this.props;
        if (email === "" || password === "") {
            this.setState({showErr:"All fields must be filled"})
        }
        else{
            const formData = new FormData();
        formData.append('Email', this.state.email);
        formData.append('Password', this.state.password);
        let data ={
            email: this.state.email,
            password: this.state.password
        }
        this.setState({loading: true});
        axios.post(apiPath + "account/login", formData)
            .then(res => {
                console.log("res",res);
                if(res.data!=="Email/Password is incorrect."){
                    console.log("res ok",res);
                    localStorage.setItem("age", remember ? 1296000 : 86400);
                    console.log("redirecting7");

                    console.log("redirecting6")
                    cookie.save('token', res.data, {maxAge: (remember ? 1296000 : 86400), path: "/"});
                    let data = jwt_decode(res.data);
                    console.log("data in cookie", data)
                    console.log("redirecting76")
                    let user = {
                        email: data.Email,
                        password: data.Password
                    };

                    console.log("redirecting5")
                    let data_user = {
                        Email: this.state.email,
                        Password: this.state.password,
                        token:res.data
                    };
                    console.log("redirecting4")
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log("redirecting")
                    this.setState({invalidMessage: false});
                    console.log("redirectin3")
                    dispatch({
                        type: "LOGGED_IN",
                        payLoad: !!cookie.load('token')
                    });
                    console.log("redirecting2")
                    dispatch({
                        type: "USER_DATA",
                        payLoad: user
                    });
                    console.log("redirecting1")
                    dispatch({
                        type: "storeUserData",
                        payLoad: data_user
                    });

                    let currentRoute = localStorage.getItem('route');
                    this.setState({loading: false});
                    this.props.history.push(currentRoute);
                    localStorage.removeItem('route');
                    console.log("redirecting")
                    
                    return <Redirect to='/' />;
                }else
                {
                        this.setState({loading: false, showErr: res.data});
                        console.log("err", this.state.loading)
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    this.setState({invalidMessage: true, loading: false});
                    console.log("errors")
                    window.confirm('email or password is incorrect')
                    this.setState({loading:false});
                }
            });
        }

        

    };

    render() {
        let {loading, showErr}= this.state;
        let{dispatch, loggedIn}= this.props;
        // let redirect= loggedIn && <Redirect to="/"/>;

        return (
            <Layout  dispatch={dispatch} loggedIn={loggedIn}>

                <div className="registration">
                    <div className="container pt-3">
                        <div className="inner-div">
                            <div className="row flex-column top-text ">
                                <h2 className="text-center">Welcome Back!</h2>
                            </div>
                            <form>
                                <div className="register-work-form">
                                    <div className="inner-pass-form">
                                        <input type="email" name="email" placeholder="Email Address" onChange={event=> this.setState({email: event.target.value})} required/>
                                        <input type="password" name="password" placeholder="Password" onChange={event=> this.setState({password: event.target.value})} required />
                                    </div>
                                    <div className="sign-up-btn">
                                        <p className="text-center" style={{color:"Red"}}>{showErr}</p>
                                        <button className="btn text-uppercase"
                                        onClick={(e)=>this.login(e)}>{loading ? "Loading ... " : "SIGN IN"}</button>
                                    </div>
                                    <div className="already-member">
                                        <p>Dont have an account? <Link to="/register-hire">Sign Up</Link></p>
                                        <p>Lost your password? <Link to="/forgetPassword">Click Here</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(SignIn);