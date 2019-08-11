import React, {Component} from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

const Context = React.createContext();


const reducer = (state, action) => {
    switch (action.type){
        case 'LOGGED_IN':
            return {...state, loggedIn: action.payLoad};
        case 'USER_DATA':
            return {...state, user: action.payLoad};
        case "storeUserData":
            return {...state, userStoreData: action.payLoad}
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action));
        },
        loggedIn: !!cookie.load('token'),
        user:typeof window!=='undefined' ? JSON.parse(localStorage.getItem('user')): null,
        userStoreData:{
            email:"",
            password:"",
            token:""
        }
    };
    render() {
        const { state, props: { children } } = this;
        return <Context.Provider value={ state } >{children}</Context.Provider>;
    }
}

export const Consumer = Context.Consumer;