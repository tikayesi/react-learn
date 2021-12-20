import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";


class App extends Component{
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <ClickCounter/>
                <HoverCounter/>
            </div>
        );
    }
    }


export default App;
