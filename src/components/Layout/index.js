import React from 'react';
import Header from "../header/index";
import Footer from "../footer/index";

const Layout=(props)=> {

        return (
            <div className="overallsectionsdiv">
               <Header dispatch={props.dispatch} loggedIn={props.loggedIn}/>
                {props.children}
                <Footer/>
            </div>
        )
}
export default Layout;