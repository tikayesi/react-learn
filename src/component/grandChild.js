import { Component } from "react";

class GrandChild extends Component{
    handleMinus = () => {
        this.props = this.props - 1
    }
    render(){
        console.log(this.props);
        return(
            <div>
                {this.props.value}
                <button onClick={this.handleMinus}>Minus</button>
            </div>
        )
    }
}

export default GrandChild;