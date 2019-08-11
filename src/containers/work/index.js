import React, {Component} from 'react';
import Layout from '../../components/Layout'
import {Link, withRouter,Redirect} from 'react-router-dom'
import axios from 'axios';
import {apiPath} from '../../services/config'
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';


class RegisterWork extends Component {
    state={
        cname:"",
        email:"",
        country:"",
        countryId:"",
        password:"",
        showErr:"",
        data:[],
        remember:false,
        countriesList:[]
    };


    componentDidMount(){
        axios.get(apiPath + "countries/countrylist").then(res=>{
            this.setState({data: res.data, countriesList:res.data, country:res.data[0].name,countryId:res.data[0].id})
        });
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
    handleChange1(event){
            this.state.countriesList.map((item)=>{
                if(item.name === event.target.value){
                    this.setState({country:item.id});
                }
            })
    }
    handleSubmit= (event) => {
        event.preventDefault();
        let {email, password, remember, cname, country, showErr} = this.state;
        let {dispatch} = this.props;
        if (email=== "" || password === "" || cname==="" || country==="") {
            this.setState({showErr:"All fields must be filled"})
        }

        else if(!email.includes("@")){
                  this.setState({showErr:"check your email"})
        }
         else{
            const formData = new FormData();
            formData.append('Email', this.state.email);
            formData.append('Password', this.state.password);
            formData.append('CountryId', this.state.country);
            formData.append('UserType', 2);
            formData.append('FullName', this.state.cname);
            console.log("formData",formData);
            axios.post(apiPath + "account/register", formData)
                .then(res => {
                    console.log("res",res);
                    if(res.data!=="Something bad happened. Please try again."){
                         
                        localStorage.setItem("age", remember ? 1296000 : 86400);

                        cookie.save('token', res.data, {maxAge: (remember ? 1296000 : 86400), path: "/"});

                        let data = jwt_decode(res.data);
                        let user = {
                            email: data.Email,
                            password: data.Password,
                            countryId: data.countryId,
                            UserType: data.UserType,
                            FullName: data.FullName

                        };
                        localStorage.setItem('user', JSON.stringify(user));
                        this.setState({invalidMessage: false});
                        dispatch({
                            type: "LOGGED_IN",
                            payLoad: !!cookie.load('token')
                        });
                        dispatch({
                            type: "USER_DATA",
                            payLoad: user
                        });
                        let currentRoute = localStorage.getItem('route');
                        this.setState({loading: false});
                        this.props.history.push(currentRoute);
                        localStorage.removeItem('route');
                        console.log("home")
                        let {loggedIn}= this.props;
                        if(loggedIn){
                            localStorage.setItem("route", this.props.location.pathname );
                            this.props.history.push('/')
                        }
                    }
                    else
                {
                        this.setState({ showErr: "Check your data, Password must have a charactor. a number and a capital letter"});
                        
                }
                })
                .catch(err => {
                    if (err.response && err.response.status === 401) {
                        this.setState({invalidMessage: true});
                        window.confirm('email or password is incorrect')
                    }
                });
        }

    };
    render() {
        let {data, showErr} = this.state;
        let{dispatch, loggedIn}= this.props;
        return (
            <Layout dispatch={dispatch} loggedIn={loggedIn}>
                <div className="registration">
                    <div className="container pt-3">
                        <div className="inner-div">
                            <div className="row flex-column top-text ">
                                <h2 className="text-center">Get your free account</h2>
                            </div>
                            <div className="register-work-form">
                                <div className="hire-work-buttons ">
                                    <Link to="/register-hire">i want to hire</Link>
                                    <Link to="/register-work">i want to work</Link>
                                </div>
                                <div className="inner-form">
                                        <input type="text" placeholder="Full Name" name="cname" onChange={event=> this.setState({cname: event.target.value})} required />
                                        
                                        <input type="text" placeholder="Email Address" name="email" onChange={event=> this.setState({email: event.target.value})} required/>
                                        
                                        <select placeholder="Conutry" name="country" onChange={(e)=>this.handleChange1(e)}>
                                            {
                                               data.length>0 && data.map((item,index)=>{
                                                return(
                                                    <option key={index}>{item.name}</option>
                                                )
                                            })}

                                        </select>
                                        
                                        <input type="password" placeholder="Password" name="password" onChange={event=> this.setState({password: event.target.value})} required />
                                        
                                    </div>
                                <div className="sign-up-btn">
                                <p className="text-center" style={{color:"Red"}}>{showErr}</p>
                                    <button className="btn text-uppercase" onClick={this.handleSubmit}>Sign up</button>
                                </div>
                                <div className="already-member">
                                    <p>Already a member? <a href="/">Log In</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(RegisterWork);