import {Component} from "react";

class ChildProps extends Component{

    handleClick = () => {
        this.props.callback('This is from child component')
    }

    render() {
        return(
            <div>
               Name: {this.props.name} Age: {this.props.umur}
                <button onClick={this.handleClick} >Click</button>
            </div>
        );
    }
}

export default ChildProps;