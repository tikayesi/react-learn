import './App.css';
import {Component} from "react";
import CounterButtonPlus from "./CounterButtonPlus";


class Count extends Component{

    constructor(props) {
        super(props)
        this.state = {
            number : 0
        }
    }

    increment = (val) =>{
        this.setState({
            number : val
        })
    }

    render() {
        return(
            <div>
                <h4>{this.state.number}</h4>
                <CounterButtonPlus callback={this.increment}/>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Count;