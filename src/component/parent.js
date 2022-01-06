import { Component } from "react";
import Child from "./child";

class Parent extends Component{
    state = {
        val : 0
    }

    handleCounter = () => {
        this.setState({
            val : this.state.val + 1
        })
    }

    render(){
        return(
            <div>
                {this.state.val} <br></br>
                <button onClick={this.handleCounter}>PLUS</button>
                <Child value={this.state.val}/>
            </div>
        )
    }
}

export default Parent;