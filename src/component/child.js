import { Component } from "react";
import GrandChild from "./grandChild";

class Child extends Component{
    render(){
        return(
            <div>
                {this.props.value}
                <GrandChild value={this.props.value}/>
            </div>
        )
    }
}

export default Child;