import React,{Component} from 'react';
import Child from './index';
import {Consumer} from '../../store/reducer'

class Container extends Component{
    render(){
        return(
            <Consumer>
                {
                    ({dispatch,loggedIn})=>(
                        <Child dispatch={dispatch} loggedIn={loggedIn} />
                    )
                }
            </Consumer>
        )
    }
}
export default Container;