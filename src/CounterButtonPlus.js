import {Component} from "react";

class CounterButtonPlus extends Component{

    constructor(props) {
        super(props)
        this.state = {
            number : 0
        }
    }

    buttonPlus = () => {
        this.setState({
            number : this.state.number + 1
        })
        this.props.callback(this.state.number);
    }

    render() {
        return(
            <div>
                <button onClick={this.buttonPlus}>Result</button>
            </div>
        );
    }
}

export default CounterButtonPlus;