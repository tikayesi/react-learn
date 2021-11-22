import {Component} from "react";
import ChildProps from "./ChildProps";

class ParentProps extends Component{

    getMessage = (msg) =>{
        this.props.callback(msg)
    }

    render(){
        return(
          <div>
            <ChildProps name={this.props.name} umur={this.props.age} callback={this.getMessage}/>
          </div>
        );
    }
}

export default ParentProps;