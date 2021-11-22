import './App.css';
import {Component} from "react";


class Count extends Component{

    constructor(props) {
        super(props)
        this.state = {
            number : 0
        }
    }

    increment(){
        this.setState({
            number : this.state.number + 1
        })
    }

    render() {
        return(
            <div>
                <h4>{this.state.number}</h4>
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        )
    }
}

export default Count;