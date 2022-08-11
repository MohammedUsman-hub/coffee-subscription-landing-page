import { Component } from 'react';
import Background from './components/bg'
import JoinBtn from './components/btn'
import Text from './components/txt';

export default class App extends Component{
    render(){
        return(
            <div>
                <Background/>
                <JoinBtn/>
                <Text/>
            </div>
        );
    }
}