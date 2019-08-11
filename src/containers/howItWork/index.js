import React, {Component} from 'react';
import TrustedCompany from "../../components/trustedcompany/index";
import Layout from '../../components/Layout'

class Howitworks extends Component {
    render() {
        let{dispatch, loggedIn}= this.props;
        return (
            <Layout dispatch={dispatch} loggedIn={loggedIn}>
                <div className="how-it-works how-it-works-page">
                    <div className="container pt-3">
                        <div className="inner-div">
                            <div className="row flex-column top-text ">
                                <h2 className="text-center">How it Works</h2>
                                <div className="hire-work-buttons ">
                                    <button className="btn text-uppercase">i want to hire</button>
                                    <button className="btn text-uppercase">i want to work</button>
                                </div>
                            </div>
                            <div className="works-content">
                                <div className="sota row ">
                                    <div className="col-sm-6">
                                        <div className="pic-div">

                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="cont-div">
                                            <h2>Create an account</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem sdfgafg</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sota row ">
                                    <div className="col-sm-6">
                                        <div className="pic-div">
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="cont-div">
                                            <h2>Post a job</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem sdfgafg</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sota row ">
                                    <div className="col-sm-6">
                                        <div className="pic-div">
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="cont-div">
                                            <h2>Recieve Applicants </h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem sdfgafg</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sota row ">
                                    <div className="col-sm-6">
                                        <div className="pic-div">
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="cont-div">
                                            <h2>Review their profiles</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem sdfgafg</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sota row ">
                                    <div className="col-sm-6">
                                        <div className="pic-div">
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="cont-div">
                                            <h2>Contact them directly</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem sdfgafg</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sota row ">
                                    <div className="col-sm-6">
                                        <div className="pic-div">
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="cont-div">
                                            <h2>Hire them directly</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem sdfgafg</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-a-job-btn">
                                <button className="btn text-uppercase">
                                    post a job
                                </button>
                            </div>
                            <TrustedCompany/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Howitworks;