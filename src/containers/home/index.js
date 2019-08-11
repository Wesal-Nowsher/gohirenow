import React, {Component} from 'react';
import {withRouter, Link,Redirect} from 'react-router-dom'
import Layout from '../../components/Layout'
import cookie from 'react-cookies';
import TrustedCompany from "../../components/trustedcompany/index";
import jwt_decode from 'jwt-decode';


class MainLayout extends Component {
    componentDidMount(){
        let {loggedIn}= this.props;
        if(!loggedIn){
            localStorage.setItem("route", this.props.location.pathname );
            this.props.history.push('/signIn')
        }
    }
    componentWillReceiveProps(nextProps){
        let {loggedIn}= nextProps;
        if(!loggedIn){
            localStorage.setItem("route", this.props.location.pathname );
            this.props.history.push('/signIn')
        }
    }
    render() {
        let{dispatch, loggedIn}= this.props;
        // console.log("loggIn",loggedIn);

        // let data = cookie.load("token") ? jwt_decode(cookie.load("token")): null;
        // console.log("data in cooke at home", data && data);
        return (
            <Layout dispatch={dispatch} loggedIn={loggedIn}>
                
                <div className="hire-want-section">
                    <div className="container">
                        <div className="row flex-column">
                            <div className="col-6 second-two">
                                <div className="largetext">
                                    <h2>
                                        Hire experts directly for any online jobs !
                                    </h2>
                                </div>
                                <div className="smalltext">
                                    <p>We take 0% commissions</p>
                                </div>
                                <div className="hire-work-buttons ">
                                    <button className="btn text-uppercase"><Link to="/register-hire">i want to hire</Link></button>
                                    <button className="btn text-uppercase"><Link to="/register-work">i want to work</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="as-seen-as">
                    <div className="container">
                        <div className="row black-back justify-content-center">
                            <h2 className="text-uppercase white">as seen on</h2>
                            <div className="black-circle-adj">
                                <div className="oval"/>
                                <div className="oval"/>
                                <div className="oval"/>
                                <div className="oval"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="what-are-you-looking">
                    <div className="container">
                        <div className="row flex-column top-text align-items-center margin-9">
                            <h2>What are you looking for?</h2>
                            <p>Choose a category of expertise</p>
                        </div>
                        <div className="row ovals">
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Social Media</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Virtual Assistant</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Wordpress</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>shopify</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Design & Creative</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Sales</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Customer Service</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Marketing</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Writing</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Admin support</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Management</p>
                            </div>
                            <div className="single-oval col-md-2">
                                <div className="small-ovals">
                                </div>
                                <p>Web, Mobile & Software Dev</p>
                            </div>
                        </div>
                        <div className="post-a-job-btn">
                            <button className="btn text-uppercase">
                                post a job
                            </button>
                        </div>
                    </div>
                </div>
                <div className="why-gohirenow">
                    <div className="container pt-3">
                        <div className="inner-div">
                            <div className="row">
                                <div className="gohire-why">
                                    <h2>Why GoHireNow</h2>
                                    <p>We are the leading experts in direct outsourcing</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="black-ovals">
                                        <div className="black-oval"/>
                                        <div className="oval-paragraph">
                                            <p className="dummy-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy text.                                            </p>
                                        </div>
                                    </div>
                                    <div className="black-ovals">
                                        <div className="black-oval"/>
                                        <div className="oval-paragraph">
                                            <p className="dummy-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy text.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="black-ovals">
                                        <div className="black-oval"/>
                                        <div className="oval-paragraph">
                                            <p className="dummy-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="black-ovals">
                                        <div className="black-oval"/>
                                        <div className="oval-paragraph">
                                            <p className="dummy-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy text.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="black-ovals">
                                        <div className="black-oval"/>
                                        <div className="oval-paragraph">
                                            <p className="dummy-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy text.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="black-ovals">
                                        <div className="black-oval"/>
                                        <div className="oval-paragraph">
                                            <p className="dummy-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 pricing">
                                <div className="col-7 d-flex p-0 " >
                                    <div className="col-sm-4 d-flex flex-column price-box p-0 borderright">
                                        <h4 className="mb-5">Programmers</h4>
                                        <p className="mb-0">Full-time rate :</p>
                                        <span className="price-in-dollars">$550 - $1300</span>
                                        <p>/month</p>
                                    </div>
                                    <div className="col-sm-4 d-flex flex-column price-box p-0 borderright">
                                        <h4  className="mb-5">Designers</h4>
                                        <p className="mb-0">Full-time rate :</p>
                                        <span className="price-in-dollars">$400 - $1100</span>
                                        <p>/month</p>
                                    </div>
                                    <div className="col-sm-4 d-flex flex-column price-box p-0 borderright">
                                        <h4 className="mb-5">SEO specialists</h4>
                                        <p className="mb-0">Full-time rate :</p>
                                        <span className="price-in-dollars">$550 - $1300</span>
                                        <p>/month</p>
                                    </div>
                                </div>
                                <div className="col-5 d-flex p-0">
                                    <div className="col-6 d-flex flex-column price-box p-0 borderright">
                                        <h4 className="mb-5">Social Media Experts</h4>
                                        <p className="mb-0">Full-time rate :</p>
                                        <span className="price-in-dollars">$300 - $600</span>
                                        <p>/month</p>
                                    </div>
                                    <div className="col-6 d-flex flex-column price-box p-0 ">
                                        <h4 className="mb-5">Virtual Assistant</h4>
                                        <p className="mb-0">Full-time rate :</p>
                                        <span className="price-in-dollars">$350 - $800</span>
                                        <p>/month</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5  mb-5 ">
                                <button className="btn text-uppercase post-a-job">post a job </button>
                            </div>
                            <TrustedCompany/>
                            <div className="row flex-column align-items-center many-ovals quotes" >
                                <h2>We change their lives</h2>
                                <div className="orange-ovals d-flex flex-row ">
                                    <div className="orange-oval "/>
                                    <div className="orange-oval "/>
                                    <div className="orange-oval "/>
                                    <div className="orange-oval "/>
                                </div>
                                <h2>They save a lot!</h2>
                                <div className="d-flex save-a-lot">
                                    <div className="orange-ovals d-flex flex-column align-items-center">
                                        <div className="orange-oval blue-ovals"/>
                                        <div className="header">
                                            <h1>Milwakie inc.</h1>
                                        </div>
                                        <div className="para">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem voluptatem voluptatem voluptatem voluptatem </p>
                                        </div>
                                        <div className="author">
                                            <h1>- CEO Jim Pooil</h1>
                                        </div>
                                    </div>
                                    <div className="orange-ovals d-flex flex-column align-items-center">
                                        <div className="orange-oval blue-ovals"/>
                                        <div className="header">
                                            <h1>Milwakie inc.</h1>
                                        </div>
                                        <div className="para">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem voluptatem voluptatem voluptatem voluptatem </p>
                                        </div>
                                        <div className="author">
                                            <h1>- CEO Jim Pooil</h1>
                                        </div>
                                    </div>
                                    <div className="orange-ovals d-flex flex-column align-items-center">
                                        <div className="orange-oval blue-ovals"/>
                                        <div className="header">
                                            <h1>Milwakie inc.</h1>
                                        </div>
                                        <div className="para">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem voluptatem voluptatem voluptatem voluptatem </p>
                                        </div>
                                        <div className="author">
                                            <h1>- CEO Jim Pooil</h1>
                                        </div>
                                    </div>
                                    <div className="orange-ovals d-flex flex-column align-items-center">
                                        <div className="orange-oval blue-ovals"/>
                                        <div className="header">
                                            <h1>Milwakie inc.</h1>
                                        </div>
                                        <div className="para">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem voluptatem voluptatem voluptatem voluptatem </p>
                                        </div>
                                        <div className="author">
                                            <h1>- CEO Jim Pooil</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-a-job-btn">
                                    <button className="btn text-uppercase post-a-job">
                                        post a job
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(MainLayout);