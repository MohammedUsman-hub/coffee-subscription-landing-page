import { Component } from 'react';
import Background from './components/bg'
import JoinBtn from './components/btn'

export default class App extends Component{
    render(){
        return(
            <div>
                <Background/>
                <JoinBtn/>
            </div>
        );
    }
}