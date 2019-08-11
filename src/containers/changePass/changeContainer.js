import React,{Component} from 'react';
import Child from './index';
import {Consumer} from '../../store/reducer'

class Container extends Component{
    render(){
        return(
            <Consumer>
                {
                    ({dispatch,loggedIn, userStoreData})=>(
                        <Child dispatch={dispatch} loggedIn={loggedIn} userStoreData={userStoreData} />
                    )
                }
            </Consumer>
        )
    }
}
export default Container;