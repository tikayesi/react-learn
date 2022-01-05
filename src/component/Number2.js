import { Component } from "react";
import { connect } from "react-redux";

class NumberDua extends Component{
    state = {
        numb : 1
    }
    render(){
        return(
            <div>
                {this.props.numb}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numb: state.globalNumber
    }
}

export default connect(mapStateToProps)(NumberDua);