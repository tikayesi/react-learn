import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import NumberList from "./NumberList";
import NumberList2 from "./NumberList2";


class App extends Component{

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                    <NumberList2/>
            </div>
        );
    }
    }


export default App;
