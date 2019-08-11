import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import cookie from 'react-cookies'

class Header extends Component {
    state={
        headerchange:""
    };
    componentDidMount(){
        console.log("props log in",this.props.loggedIn);
        if(this.props.loggedIn){
            this.setState({headerchange:"show"})
        }
    }
    logout=()=>{
      let {dispatch}=this.props;
        let age= localStorage.getItem("age");
        cookie.remove('token',{
            maxAge: parseInt(age),
            path:'/'
      });
        dispatch({
            type:"LOGGED_IN",
            payLoad:false
        });
    };
    render() {
        return (
            <div className="overallsectionsdiv">
                <div className="header mt-3 mb-3">
                    <div className="container">
                        <div className="row desktop-menu">
                            <div className="logo col-md-3">
                                <Link to="/"><img src={require("../../assets/logo.png")} alt=""/></Link>
                            </div>
                            <div className="navigationbar col-md-6 d-flex justify-content-between align-items-center ">
                                <div className="main-nav">
                                    <span className="text-uppercase"><Link to="/how-it-works">how it works</Link></span>
                                    <span className="text-uppercase">pricing</span>
                                </div>
                                {
                                    this.state.headerchange!=="show" && <div className="auth-links">
                                        <span className="text-uppercase"><Link to="/signIn">sign in</Link></span>
                                        <span className="text-uppercase"><Link to="/register-hire">sign up</Link></span>
                                    </div>
                                }
                                {
                                    this.state.headerchange==="show" && <div className="auth-links">
                                        <div className="user dropdown-toggle-split" data-toggle="dropdown" href="#"/>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/changePassword">Change Password</Link></li>
                                            <li><Link to="/" onClick={()=> this.logout()}>Logout</Link></li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            <div className="job-post col-md-3 d-flex align-items-center">
                                <button className="btn text-uppercase">post a job</button>
                            </div>
                        </div>
                        {/*mobile menu*/}
                        <div className="row mobile-menu align-items-center">
                            <div className="navigationbar col-2 ">
                                <a className="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" href="#"> <i className="fa fa-bars"/></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/how-it-works">how it works</Link></li>
                                    <li><a href="#">pricing</a></li>
                                    <hr/>
                                    <li><Link to="/signIn">sign in</Link></li>
                                    <li><Link to="/register-hire">sign up</Link></li>
                                </ul>
                            </div>
                            <div className="logo col-5">
                                <img src={require("../../assets/logo.png")} alt=""/>
                            </div>
                            <div className="job-post col-5 d-flex align-items-center">
                                <button className="btn text-uppercase">post a job</button>
                            </div>

                        </div>
                        {/*mobile menu*/}

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);