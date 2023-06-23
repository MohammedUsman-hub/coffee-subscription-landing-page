import { Component } from 'react';
import Background from './components/bg'
import JoinBtn from './components/btn'
import NavBar from './components/nav';
import Text from './components/txt';
import TextBox from './components/txtbox';
import LearnMore from './components/learnmore';
import SocialMediaLogo from './components/SmLogo';

export default class App extends Component{
    render(){
        return(
            <div>
                <Background/>
                <JoinBtn/>
                <Text/>
                <NavBar/>
                <TextBox/>
                <LearnMore/>
                <SocialMediaLogo/>
            </div>
        );
    }
}