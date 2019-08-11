import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import HomeContainer from '../containers/home/homeContainer';
import HowItWorkContainer from '../containers/howItWork/howItWorkContainer';
import WorkContainer from '../containers/work/workContainer';
import HireContainer from '../containers/hire/hireCotainer';
import ResetContainer from '../containers/resetpass/resetContainer';
import SignInContainer from '../containers/signIn/signInContainer';
import ContactUsContainer from '../containers/contact/contactUsContainer';
import PaymentContainer from '../containers/payment/paymentContainer';
import ChangeContainer from '../containers/changePass/changeContainer';
import ResetConfirmContainer from '../containers/resetConfirm/resetConfirmContainer'

class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeContainer} exact/>
                    <Route path="/how-it-works" component={HowItWorkContainer} />
                    <Route path="/register-work" component={WorkContainer} />
                    <Route path="/register-hire" component={HireContainer} />
                    <Route path="/forgetPassword" component={ResetContainer} />
                    <Route path="/changePassword" component={ChangeContainer} />
                    <Route path="/signIn" component={SignInContainer} />
                    <Route path="/contactUs" component={ContactUsContainer} />
                    <Route path="/payment-details" component={PaymentContainer} />
                    <Route path="/resetPassword" component={ResetConfirmContainer} />

                </Switch>
            </BrowserRouter>
        )
    }
}
export default withRouter(Routes);