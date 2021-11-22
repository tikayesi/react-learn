import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import ParentProps from "./ParentProps";


class App extends Component{

    constructor(props) {
        super(props);
        this.state= {
            message : ''
        }
    }

    getMessage = (msg) =>{
        this.setState({message : msg})
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <body>
                    {/*<Count/>*/}
                <ParentProps name={'Enigmacamp'} age={3} callback={this.getMessage}/>
                <h1>{this.state.message}</h1>
                </body>
            </div>
        );
    }
    }


export default App;
